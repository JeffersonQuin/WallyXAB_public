import supabase from '../../utils/supabase'

function getWeekRange() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 6)
  return {
    inicio: today.toISOString().split('T')[0],
    fin: nextWeek.toISOString().split('T')[0],
  }
}

const DIAS_SLOTS = [
  { inicio: '08:00', fin: '09:00', label: '8:00 - 9:00' },
  { inicio: '09:00', fin: '10:00', label: '9:00 - 10:00' },
  { inicio: '10:00', fin: '11:00', label: '10:00 - 11:00' },
  { inicio: '11:00', fin: '12:00', label: '11:00 - 12:00' },
]

const ALL_SLOTS = [
  { inicio: '08:00', fin: '09:00', label: '8:00 - 9:00' },
  { inicio: '09:00', fin: '10:00', label: '9:00 - 10:00' },
  { inicio: '10:00', fin: '11:00', label: '10:00 - 11:00' },
  { inicio: '11:00', fin: '12:00', label: '11:00 - 12:00' },
  { inicio: '12:00', fin: '13:00', label: '12:00 - 13:00' },
  { inicio: '13:00', fin: '14:00', label: '13:00 - 14:00' },
  { inicio: '14:00', fin: '15:00', label: '14:00 - 15:00' },
  { inicio: '15:00', fin: '16:00', label: '15:00 - 16:00' },
  { inicio: '16:00', fin: '17:00', label: '16:00 - 17:00' },
  { inicio: '17:00', fin: '18:00', label: '17:00 - 18:00' },
  { inicio: '18:00', fin: '19:00', label: '18:00 - 19:00' },
  { inicio: '19:00', fin: '20:00', label: '19:00 - 20:00' },
  { inicio: '20:00', fin: '21:00', label: '20:00 - 21:00' },
  { inicio: '21:00', fin: '22:00', label: '21:00 - 22:00' },
  { inicio: '22:00', fin: '23:00', label: '22:00 - 23:00' },
]

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

function slotsOverlap(slotA, slotB) {
  return slotA.inicio < slotB.fin && slotA.fin > slotB.inicio
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fechaInicio = (query.fecha_inicio as string) || getWeekRange().inicio
  const fechaFin = (query.fecha_fin as string) || getWeekRange().fin

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const maxDate = new Date(today)
  maxDate.setDate(today.getDate() + 30)
  const finDate = new Date(fechaFin + 'T00:00:00')

  if (finDate > maxDate) {
    throw createError({
      statusCode: 400,
      message: 'La fecha límite para reservar es dentro de los próximos 30 días',
    })
  }

  if (finDate < today) {
    throw createError({
      statusCode: 400,
      message: 'No se pueden consultar fechas pasadas',
    })
  }

  const { data: reservas, error } = await supabase
    .from('reservas')
    .select('fecha_reserva, hora_inicio, hora_fin')
    .gte('fecha_reserva', fechaInicio)
    .lte('fecha_reserva', fechaFin)

  if (error) {
    console.error('Error al obtener disponibilidad:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al obtener disponibilidad',
    })
  }

  const start = new Date(fechaInicio + 'T00:00:00')
  const end = new Date(fechaFin + 'T00:00:00')
  const days = []

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0]

    const reservasDelDia = reservas.filter(
      (r) => r.fecha_reserva === dateStr
    )

    function isSlotAvailable(slot) {
      return !reservasDelDia.some((r) =>
        slotsOverlap(
          { inicio: slot.inicio, fin: slot.fin },
          { inicio: r.hora_inicio.slice(0, 5), fin: r.hora_fin.slice(0, 5) },
        )
      )
    }

    const availableDia = DIAS_SLOTS.filter(isSlotAvailable)

    const horarios = ALL_SLOTS.map((s) => ({
      label: s.label,
      disponible: isSlotAvailable(s),
    }))

    days.push({
      date: dateStr,
      name: DAY_NAMES[d.getDay()],
      number: d.getDate(),
      month: d.toLocaleDateString('es-ES', { month: 'long' }),
      isToday:
        dateStr === new Date().toISOString().split('T')[0],
      slots: availableDia.map((s) => s.label),
      fullDay: availableDia.length === DIAS_SLOTS.length,
      horarios,
    })
  }

  return {
    success: true,
    data: days,
    semana: `${fechaInicio} - ${fechaFin}`,
  }
})
