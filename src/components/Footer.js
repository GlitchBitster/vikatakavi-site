export function Footer(content) {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <h2 class="footer-logo">${content.brand.logoText}</h2>
          <p>&copy; <span id="year">${new Date().getFullYear()}</span> ${content.footer.text}</p>
        </div>
      </div>
    </footer>
  `;
}
