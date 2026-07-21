import supabase from '../utils/supabase'

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase
    .from('reservas')
    .select(`
      *,
      usuarios:administrador_id (
        nombre
      )
    `)
    .order('creado_en', { ascending: false })

  if (error) {
    console.error('Error al obtener reservas:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al obtener las reservas',
    })
  }

  const reservas = data.map((r) => ({
    ...r,
    administrador_nombre: r.usuarios?.nombre,
    usuarios: undefined,
  }))

  return {
    success: true,
    data: reservas,
  }
})
