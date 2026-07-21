<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ day.name }} {{ day.number }} de {{ day.month }}</h3>
          <button class="modal-close" @click="$emit('close')" aria-label="Cerrar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <table class="horarios-table">
            <thead>
              <tr>
                <th>Rango de hora</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="h in day.horarios" :key="h.label" :class="{ 'row-reservado': !h.disponible }">
                <td class="td-hora">{{ h.label }}</td>
                <td class="td-estado">
                  <template v-if="h.disponible">
                    <a
                      :href="whatsappUrl(h.label)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-reservar"
                    >
                      Reservar
                    </a>
                  </template>
                  <template v-else>
                    <span class="badge-reservado">RESERVADO</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  day: {
    type: Object,
    required: true,
  },
})

defineEmits(['close'])

const whatsappNumber = '59164551448'

function whatsappUrl(slotLabel) {
  const msg = encodeURIComponent(
    `¡Hola! Me interesa reservar la hora de ${slotLabel} para el día ${props.day.name} ${props.day.number} de ${props.day.month}.`
  )
  return `https://wa.me/${whatsappNumber}?text=${msg}`
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal-content {
  background: var(--surface);
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--outline-variant);
}
.modal-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 20px;
  color: var(--on-surface);
  margin: 0;
}
.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--surface-container);
  color: var(--on-surface-variant);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.modal-close:hover {
  background: var(--surface-container-highest);
}
.modal-body {
  padding: 16px 24px 24px;
  overflow-y: auto;
}
.horarios-table {
  width: 100%;
  border-collapse: collapse;
}
.horarios-table th {
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: var(--on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 10px 12px;
  border-bottom: 2px solid var(--outline-variant);
}
.horarios-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--outline-variant);
  font-size: 14px;
}
.row-reservado {
  background: var(--surface-container);
}
.td-hora {
  font-weight: 600;
  color: var(--on-surface);
}
.td-estado {
  text-align: right;
}
.btn-reservar {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 6px 18px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-reservar:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 12px rgba(160, 20, 79, 0.3);
}
.badge-reservado {
  display: inline-block;
  background: var(--surface-dim);
  color: var(--on-surface-variant);
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
}
</style>
