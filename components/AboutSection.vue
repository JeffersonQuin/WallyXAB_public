<template>
  <section class="about">
    <div class="about-inner">
      <div class="about-bg-circle"></div>
      <div class="about-content">
        <h2 class="about-title">Conoce a Waly</h2>
        <p class="about-text">
          Waly naci&oacute; para crear un espacio donde el vóley sea el protagonista. Contamos con canchas de wally en climas controlados, listas para que reserves y vengas a jugar con tu equipo. Sin complicaciones, solo vóley.
        </p>
        <a href="#" class="about-link">
          Nuestra historia
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 80px 24px;
  position: relative;
}
.about-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.about-bg-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  opacity: 0.06;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.about-content {
  position: relative;
}
.about-title {
  font-size: 34px;
  color: var(--on-surface);
  margin: 0 0 16px;
}
.about-text {
  font-size: 18px;
  line-height: 1.65;
  color: var(--on-surface-variant);
  margin: 0 0 28px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.about-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  transition: gap 0.25s;
}
.about-link:hover {
  gap: 12px;
}
@media (max-width: 768px) {
  .about {
    padding: 60px 16px;
  }
  .about-title {
    font-size: 26px;
  }
  .about-text {
    font-size: 16px;
  }
}
</style>
