export function BookingModal(content) {
    const carOptions = content.fleetSection.cars.map(car =>
        `<option value="${car.id}">${car.name}</option>`
    ).join('');

    return `
    <div class="modal-overlay" id="bookingModal">
      <div class="modal-content">
        <button class="close-modal" id="closeModal">&times;</button>
        <h2 class="modal-title">${content.modal.title}</h2>
        <p class="modal-subtitle">${content.modal.subtitle}</p>

        <form id="bookingForm" class="booking-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Name">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Mobile Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="+91 98765 00000">
            </div>
            <div class="form-group">
              <label for="pickup">Pickup City</label>
              <input type="text" id="pickup" name="pickup" required placeholder="Chennai">
            </div>
          </div>

          <div class="form-group">
            <label for="carSelect">Vehicle Preference</label>
            <select id="carSelect" name="carSelect">
              <option value="Any">Recommend me a car</option>
              ${carOptions}
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="date">Travel Date</label>
              <input type="date" id="date" name="date" required>
            </div>
          </div>

          <button type="submit" class="submit-btn primary-btn">Confirm Booking</button>
        </form>

        <div class="success-message" id="successMessage" style="display: none;">
          <h3>Booking Received</h3>
          <p>${content.modal.successMessage}</p>
        </div>
      </div>
    </div>
  `;
}
