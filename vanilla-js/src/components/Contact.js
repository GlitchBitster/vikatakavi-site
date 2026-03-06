export function Contact(content) {
    const infoHtml = content.contact.info.map(item => `
    <div class="info-item">
      <span class="info-label">${item.label}</span>
      <p>${item.value}</p>
    </div>
  `).join('');

    return `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-card">
          <h2 class="section-title">${content.contact.title}</h2>
          <div class="contact-info">
            ${infoHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
