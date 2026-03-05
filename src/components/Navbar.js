export function Navbar(content) {
    const linksHtml = content.navLinks
        .map(link => `<a href="${link.href}">${link.label}</a>`)
        .join('');

    return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">${content.brand.logoText}</a>
        <div class="nav-links">
          ${linksHtml}
          <button class="nav-cta book-now-btn">Book Now</button>
        </div>
      </div>
    </nav>
  `;
}
