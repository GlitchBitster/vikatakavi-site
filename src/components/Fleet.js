export function Fleet(content) {
    const carsHtml = content.fleetSection.cars.map(car => `
    <div class="car-card">
      <div class="car-image-container">
        <img src="${car.image}" alt="${car.name}" class="car-image">
      </div>
      <div class="car-details">
        <h3>${car.name}</h3>
        <p>${car.description}</p>
        <button class="secondary-btn book-now-btn" data-car="${car.id}">Reserve Now</button>
      </div>
    </div>
  `).join('');

    return `
    <section id="fleet" class="fleet-section">
      <div class="container">
        <h2 class="section-title">${content.fleetSection.title}</h2>
        <p class="section-subtitle">${content.fleetSection.subtitle}</p>
        <div class="fleet-grid">
          ${carsHtml}
        </div>
      </div>
    </section>
  `;
}
