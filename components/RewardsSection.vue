<template>
  <section class="rewards">
    <div class="rewards-inner">
      <div class="rewards-card">
        <div class="rewards-visual">
          <div class="rewards-image-stack">
            <img src="/images/PerritoFoto.png" alt="Waly mascota" class="img-perrito" />
            <img src="/images/Tarjeta.png" alt="Tarjeta Waly Rewards" class="img-tarjeta" />
          </div>
        </div>
        <div class="rewards-content">
          <h3 class="rewards-title">Waly Rewards</h3>
          <p class="rewards-desc">
            &iexcl;Pide tu tarjeta f&iacute;sica!
          </p>
          <p class="rewards-text">
            Valoramos tu confianza. Por cada 9 horas de juego en nuestras canchas, la 10&ordf; hora corre por nuestra cuenta. &iexcl;Acumula horas y juega gratis!
          </p>
          <ul class="rewards-list">
            <li v-for="i in 3" :key="i" class="reward-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Hora {{ i * 3 }}-{{ i * 3 + 2 }} completada</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rewards {
  padding: 60px 24px 80px;
}
.rewards-inner {
  max-width: 960px;
  margin: 0 auto;
}
.rewards-card {
  display: flex;
  gap: 36px;
  align-items: center;
  background: var(--surface-container-lowest);
  border-radius: 20px;
  padding: 36px;
  border: 1px solid var(--outline-variant);
  transition: transform 0.3s, box-shadow 0.3s;
}
.rewards-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
}
.rewards-visual {
  flex-shrink: 0;
  width: 240px;
}
.rewards-image-stack {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-perrito {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}
.img-tarjeta {
  width: 75%;
  height: auto;
  border-radius: 8px;
  display: block;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  position: absolute;
  bottom: -16px;
  right: -12px;
  z-index: 2;
  transform: rotate(-6deg);
  transition: transform 0.3s;
}
.rewards-card:hover .img-tarjeta {
  transform: rotate(-3deg) scale(1.03);
}
.rewards-content {
  flex: 1;
  min-width: 0;
}
.rewards-title {
  font-size: 26px;
  color: var(--on-surface);
  margin: 0 0 4px;
}
.rewards-desc {
  font-size: 16px;
  font-weight: 700;
  color: var(--tertiary);
  margin: 0 0 8px;
}
.rewards-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin: 0 0 16px;
}
.rewards-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.reward-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--on-surface);
}
@media (max-width: 768px) {
  .rewards-card {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
  .rewards-visual {
    width: 200px;
  }
  .rewards {
    padding: 40px 16px 60px;
  }
}
</style>
