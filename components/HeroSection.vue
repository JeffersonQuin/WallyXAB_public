<template>
  <section id="inicio" class="hero">
    <div class="hero-bg">
      <svg class="hero-blob" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.08" />
            <stop offset="100%" stop-color="var(--secondary)" stop-opacity="0.06" />
          </linearGradient>
        </defs>
        <path class="blob-path" d="M 400 100 C 550 80 700 200 680 350 C 660 500 520 600 400 580 C 280 560 140 500 120 350 C 100 200 250 120 400 100 Z">
          <animate attributeName="d" dur="14s" repeatCount="indefinite" values="
            M 400 100 C 550 80 700 200 680 350 C 660 500 520 600 400 580 C 280 560 140 500 120 350 C 100 200 250 120 400 100 Z;
            M 400 80 C 520 60 680 180 690 340 C 700 500 540 620 400 600 C 260 580 120 520 110 360 C 100 200 280 100 400 80 Z;
            M 400 120 C 580 100 720 220 690 360 C 660 500 500 580 400 560 C 300 540 160 480 130 340 C 100 200 220 140 400 120 Z;
            M 400 100 C 550 80 700 200 680 350 C 660 500 520 600 400 580 C 280 560 140 500 120 350 C 100 200 250 120 400 100 Z
          " />
        </path>
      </svg>
    </div>
    <div class="hero-ripple" aria-hidden="true">
      <span class="ripple-ring"></span>
      <span class="ripple-ring"></span>
      <span class="ripple-ring"></span>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">Vive el vóley en <span class="hero-title-em">Waly</span></h1>
      <p class="hero-desc">
        Canchas de wally de primer nivel para que vengas a jugar con tus amigos. Clima controlado, iluminación profesional y el mejor ambiente para disfrutar cada partido.
      </p>
      <div class="hero-actions">
        <a href="#" class="btn-primary">Ver Disponibilidad</a>
        <a href="#" class="btn-secondary">Saber m&aacute;s</a>
      </div>
    </div>
    <div class="hero-logo-decor" aria-hidden="true">
      <img src="/images/PerritoCelular.png" alt="" class="hero-logo-img" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 160px 24px 100px;
  overflow: hidden;
  background: var(--surface-container-lowest);
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-blob {
  width: 100%;
  height: 100%;
}
.blob-path {
  fill: url(#blobGrad);
}
.hero-logo-decor {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
}
.hero-logo-img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 12px 48px rgba(160, 20, 79, 0.2),
              0 0 0 8px rgba(254, 250, 231, 0.6);
  pointer-events: auto;
  cursor: default;
  animation: logoFloat 5s ease-in-out infinite;
}
.hero-logo-img:hover {
  animation: logoBounce 0.6s ease-in-out;
}
@keyframes logoFloat {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-14px) translateX(-4px); }
  75% { transform: translateY(14px) translateX(4px); }
}
@keyframes logoBounce {
  0% { transform: scale(1); }
  15% { transform: scale(1.12) translateY(-10px); }
  30% { transform: scale(0.96) translateY(6px); }
  45% { transform: scale(1.06) translateY(-4px); }
  60% { transform: scale(0.98) translateY(2px); }
  75% { transform: scale(1.02) translateY(-1px); }
  100% { transform: scale(1) translateY(0); }
}
.hero-ripple {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  pointer-events: none;
  opacity: 0.2;
}
.ripple-ring {
  position: absolute;
  border: 1.5px solid var(--primary);
  border-radius: 50%;
  animation: ripplePulse 4s ease-out infinite;
}
.ripple-ring:nth-child(1) {
  width: 80px;
  height: 80px;
  top: -40px;
  left: -40px;
  animation-delay: 0s;
}
.ripple-ring:nth-child(2) {
  width: 160px;
  height: 160px;
  top: -80px;
  left: -80px;
  animation-delay: 1s;
}
.ripple-ring:nth-child(3) {
  width: 240px;
  height: 240px;
  top: -120px;
  left: -120px;
  animation-delay: 2s;
}
@keyframes ripplePulse {
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.2; }
  100% { transform: scale(1.5); opacity: 0; }
}
.hero-content {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.hero-title {
  font-size: 52px;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--on-surface);
  margin: 0 0 20px;
}
.hero-title-em {
  color: var(--primary);
  font-style: italic;
  font-weight: 800;
}
.hero-desc {
  font-size: 18px;
  line-height: 1.65;
  color: var(--on-surface-variant);
  margin: 0 0 40px;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary);
  color: white;
  padding: 16px 36px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(160, 20, 79, 0.25);
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--secondary);
  padding: 16px 36px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid var(--secondary);
  transition: background 0.25s, color 0.25s;
}
.btn-secondary:hover {
  background: var(--secondary);
  color: white;
}
@media (max-width: 1024px) {
  .hero-logo-decor {
    display: none;
  }
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 34px;
  }
  .hero-desc {
    font-size: 16px;
  }
  .hero {
    padding: 130px 16px 70px;
  }
  .hero-ripple {
    display: none;
  }
}
</style>
