<template>
  <article class="day-card" :class="{ 'day-card--today': day.isToday }">
    <div class="day-card-header">
      <span class="day-name">{{ day.name }}</span>
      <div class="day-badge" :class="{ 'day-badge--today': day.isToday }">
        {{ day.number }}
      </div>
    </div>
    <div class="day-card-body">
      <template v-if="day.fullDay">
        <span class="day-full">Disponible: Todo el d&iacute;a</span>
      </template>
      <template v-else-if="day.slots.length">
        <span class="day-slots-label">Horarios Disponibles:</span>
        <div class="day-slots">
          <span v-for="slot in day.slots" :key="slot" class="slot-chip">{{ slot }}</span>
        </div>
      </template>
      <template v-else>
        <span class="day-empty">Sin disponibilidad</span>
      </template>
      <button class="btn-ver-mas" @click="$emit('ver-mas', day)">
        Ver m&aacute;s
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  day: {
    type: Object,
    required: true,
  },
})
defineEmits(['ver-mas'])
</script>

<style scoped>
.day-card {
  background: var(--surface-container-lowest);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--outline-variant);
  transition: transform 0.2s, box-shadow 0.2s;
}
.day-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.day-card--today {
  border-color: var(--primary);
  background: var(--surface-container-low);
}
.day-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.day-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.day-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--on-surface);
  background: var(--surface-container);
}
.day-badge--today {
  background: var(--primary);
  color: white;
}
.day-card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.day-slots-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.day-slots {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.slot-chip {
  background: var(--primary);
  color: white;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
}
.slot-chip:hover {
  transform: scale(1.05);
}
.day-full {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
}
.day-empty {
  font-size: 13px;
  color: var(--outline);
  font-style: italic;
}
.btn-ver-mas {
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid var(--outline-variant);
  border-radius: 9999px;
  background: var(--surface-container);
  color: var(--on-surface-variant);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-ver-mas:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
</style>
