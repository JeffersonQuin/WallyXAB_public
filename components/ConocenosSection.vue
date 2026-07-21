<template>
  <section id="conocenos" class="conocenos">
    <div class="conocenos-inner">
      <div class="conocenos-header">
        <span class="conocenos-tag">Conócenos</span>
        <h2 class="conocenos-title">Las mejores canchas de wally para que vengas a jugar</h2>
        <p class="conocenos-subtitle">
          En Waly tenemos canchas profesionales de wally con todo lo necesario para que solo te preocupes de jugar. Clima controlado, iluminación LED y ambiente increíble.
        </p>
      </div>

      <div class="conocenos-story">
        <div class="conocenos-story-image">
          <img src="/images/PerritoJugando.png" alt="Waly jugando" />
        </div>
        <div class="conocenos-story-content">
          <h3>Nuestra historia</h3>
          <p>
            Waly nació de una idea simple: tener un lugar cool donde ir a jugar vóley sin complicaciones. Un espacio con canchas profesionales, buen ambiente y todo lo necesario para que solo llegues, juegues y disfrutes.
          </p>
          <p>
            Hoy somos el punto de encuentro para amantes del vóley. Canchas en clima controlado, iluminación LED y un ambiente único para que cada partido sea una experiencia inolvidable.
          </p>
        </div>
      </div>

      <div class="conocenos-gallery">
        <h3 class="conocenos-gallery-title">Galería</h3>
        <div class="conocenos-gallery-grid">
          <div class="conocenos-gallery-item conocenos-gallery-item--wide">
            <img src="/images/PerritoFoto.png" alt="Waly" />
          </div>
          <div class="conocenos-gallery-item">
            <img src="/images/PerritoJugando.png" alt="Waly jugando" />
          </div>
          <div class="conocenos-gallery-item">
            <img src="/images/PerritoTarjeta.png" alt="Waly tarjeta" />
          </div>
          <div class="conocenos-gallery-item">
            <img src="/images/PerritoCelular.png" alt="Waly celular" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.conocenos {
  padding: 80px 24px;
  background: var(--surface-container-low);
}
.conocenos-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.conocenos-header {
  text-align: center;
  margin-bottom: 52px;
}
.conocenos-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--tertiary);
  background: var(--tertiary-container);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.conocenos-title {
  font-size: 34px;
  color: var(--on-surface);
  margin: 0 auto 14px;
  max-width: 680px;
  line-height: 1.25;
}
.conocenos-subtitle {
  font-size: 17px;
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin: 0 auto;
  max-width: 540px;
}
.conocenos-story {
  display: flex;
  gap: 48px;
  align-items: center;
  background: var(--surface-container-lowest);
  border-radius: 20px;
  padding: 36px;
  border: 1px solid var(--outline-variant);
  margin-bottom: 48px;
}
.conocenos-story-image {
  flex-shrink: 0;
  width: 280px;
}
.conocenos-story-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}
.conocenos-story-content h3 {
  font-size: 26px;
  color: var(--on-surface);
  margin: 0 0 14px;
}
.conocenos-story-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin: 0 0 12px;
}
.conocenos-story-content p:last-child {
  margin-bottom: 0;
}
.conocenos-gallery-title {
  font-size: 26px;
  text-align: center;
  color: var(--on-surface);
  margin: 0 0 28px;
}
.conocenos-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.conocenos-gallery-item {
  border-radius: 14px;
  overflow: hidden;
}
.conocenos-gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.conocenos-gallery-item:hover img {
  transform: scale(1.06);
}
.conocenos-gallery-item--wide {
  grid-column: span 2;
  grid-row: span 2;
}
.conocenos-gallery-item--wide img {
  height: 100%;
}
@media (max-width: 900px) {
  .conocenos-story {
    flex-direction: column;
    text-align: center;
  }
  .conocenos-story-image {
    width: 220px;
  }
  .conocenos-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .conocenos-gallery-item--wide {
    grid-column: span 1;
    grid-row: span 1;
  }
  .conocenos-gallery-item--wide img {
    height: 220px;
  }
}
@media (max-width: 600px) {
  .conocenos {
    padding: 60px 16px;
  }
  .conocenos-title {
    font-size: 26px;
  }
  .conocenos-story {
    padding: 24px;
  }
  .conocenos-gallery-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .conocenos-gallery-item img {
    height: 150px;
  }
}
</style>
