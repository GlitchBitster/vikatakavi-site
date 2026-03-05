import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Modal Logic
  const modal = document.getElementById('bookingModal');
  const overlay = modal;
  const closeBtn = document.getElementById('closeModal');
  const bookBtns = document.querySelectorAll('.book-now-btn');
  const carSelect = document.getElementById('carSelect');

  const form = document.getElementById('bookingForm');
  const successMessage = document.getElementById('successMessage');

  // Open Modal
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Auto select car if data attribute is present
      const carName = btn.getAttribute('data-car');
      if (carName) {
        carSelect.value = carName;
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });

  // Close Modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset form states after animation
    setTimeout(() => {
      form.style.display = 'block';
      successMessage.style.display = 'none';
      form.reset();
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real app, send data to backend here.
    // For now, simulate success.
    form.style.display = 'none';
    successMessage.style.display = 'block';
  });
});

