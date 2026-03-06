export function Hero(content) {
    return `
    <header id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${content.hero.title}</h1>
        <p class="hero-subtitle">${content.hero.subtitle}</p>
        <button class="primary-btn book-now-btn">${content.hero.ctaText}</button>
      </div>
    </header>
  `;
}
