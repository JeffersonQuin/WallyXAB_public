<template>
  <section class="calendar">
    <div class="calendar-header">
      <h2 class="calendar-title">Agenda Semanal</h2>
      <p class="calendar-subtitle">Consulta los espacios disponibles para esta semana</p>
    </div>

    <div class="week-nav">
      <button
        class="week-nav-btn"
        :class="{ 'week-nav-btn--disabled': semanaOffset <= 0 }"
        :disabled="semanaOffset <= 0"
        aria-label="Semana anterior"
        @click="semanaAnterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <span class="week-label">{{ weekLabel }}</span>
      <button
        class="week-nav-btn"
        :class="{ 'week-nav-btn--disabled': limiteAlcanzado }"
        :disabled="limiteAlcanzado"
        aria-label="Semana siguiente"
        @click="semanaSiguiente"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
    <p v-if="limiteAlcanzado" class="week-limit">Solo se puede reservar hasta 30 d&iacute;as antes. Has llegado al l&iacute;mite.</p>

    <div v-if="cargando" class="loading">Cargando disponibilidad...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="days-grid">
      <DayCard
        v-for="day in days"
        :key="day.date"
        :day="day"
        @ver-mas="abrirModal"
      />
    </div>

    <DayModal
      v-if="modalDay"
      :day="modalDay"
      @close="modalDay = null"
    />
  </section>
</template>

<script setup>
const days = ref([])
const cargando = ref(true)
const error = ref(null)
const semanaOffset = ref(0)
const modalDay = ref(null)

function abrirModal(day) {
  modalDay.value = day
}

function getWeekRange(offset) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const start = new Date(today)
  start.setDate(today.getDate() + offset * 7)
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  return {
    inicio: start.toISOString().split('T')[0],
    fin: end.toISOString().split('T')[0],
  }
}

const limiteAlcanzado = computed(() => {
  const { inicio } = getWeekRange(semanaOffset.value + 1)
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)
  maxDate.setHours(0, 0, 0, 0)
  return new Date(inicio + 'T00:00:00') > maxDate
})

const weekLabel = computed(() => {
  if (!days.value.length) return ''
  const first = days.value[0]
  const last = days.value[days.value.length - 1]
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ]
  const monthFirst = meses[new Date(first.date + 'T00:00:00').getMonth()]
  const monthLast = meses[new Date(last.date + 'T00:00:00').getMonth()]
  if (monthFirst === monthLast) {
    return `${monthFirst} ${first.number} - ${last.number}`
  }
  return `${monthFirst} ${first.number} - ${monthLast} ${last.number}`
})

async function fetchDisponibilidad(offset) {
  cargando.value = true
  error.value = null
  const { inicio, fin } = getWeekRange(offset)
  try {
    const res = await $fetch(`/api/reservas/disponibilidad?fecha_inicio=${inicio}&fecha_fin=${fin}`)
    days.value = res.data
  } catch (e) {
    error.value = e.data?.message || 'Error al cargar la disponibilidad'
    days.value = []
  } finally {
    cargando.value = false
  }
}

function semanaAnterior() {
  semanaOffset.value--
  fetchDisponibilidad(semanaOffset.value)
}

function semanaSiguiente() {
  semanaOffset.value++
  fetchDisponibilidad(semanaOffset.value)
}

fetchDisponibilidad(0)
</script>

<style scoped>
.calendar {
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 24px;
}
.calendar-header {
  text-align: center;
  margin-bottom: 32px;
}
.calendar-title {
  font-size: 34px;
  line-height: 1.2;
  color: var(--on-surface);
  margin: 0 0 8px;
}
.calendar-subtitle {
  font-size: 16px;
  color: var(--on-surface-variant);
  margin: 0;
}
.week-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}
.week-nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--outline-variant);
  background: var(--surface-container-lowest);
  color: var(--on-surface-variant);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.week-nav-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.week-nav-btn--disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}
.week-limit {
  text-align: center;
  font-size: 13px;
  color: var(--primary);
  font-weight: 600;
  margin: -20px 0 20px;
}
.week-label {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--on-surface);
  min-width: 160px;
  text-align: center;
}
.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}
.loading,
.error {
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: var(--on-surface-variant);
}
.error {
  color: var(--error);
}
@media (max-width: 640px) {
  .days-grid {
    grid-template-columns: 1fr;
  }
  .calendar {
    padding: 60px 16px;
  }
}
</style>
