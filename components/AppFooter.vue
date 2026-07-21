<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-icon">W</span>
          <span class="logo-text">Waly</span>
        </div>
        <p class="footer-copy">&copy; 2024 Waly. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
        <a href="#" class="footer-link">Contact Us</a>
      </div>
      <div class="footer-social">
        <a href="#" class="social-link" aria-label="Share">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </a>
        <a href="#" class="social-link" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface-dim);
  border-top: 1px solid var(--outline-variant);
  padding: 40px 24px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 800;
  font-size: 16px;
}
.logo-text {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  color: var(--primary);
}
.footer-copy {
  font-size: 13px;
  color: var(--on-surface-variant);
  margin: 4px 0 0;
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--on-surface-variant);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover {
  color: var(--primary);
}
.footer-social {
  display: flex;
  gap: 12px;
}
.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-container);
  color: var(--on-surface-variant);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.social-link:hover {
  background: var(--primary);
  color: white;
}
@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
