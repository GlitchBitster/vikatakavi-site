import '../css/style.css';
import { content } from '../data/content.js';
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { Fleet } from '../components/Fleet.js';
import { Contact } from '../components/Contact.js';
import { Footer } from '../components/Footer.js';
import { BookingModal } from '../components/BookingModal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render App
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Navbar(content)}
    ${Hero(content)}
    ${Fleet(content)}
    ${Contact(content)}
    ${Footer(content)}
    ${BookingModal(content)}
  `;

  // 2. Initialize Interactivity

  // Set current year in footer (if it wasn't already handled in the component string)
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Modal logic
  const modal = document.getElementById('bookingModal');
  const bookBtns = document.querySelectorAll('.book-now-btn');
  const closeModalBtn = document.getElementById('closeModal');
  const carSelect = document.getElementById('carSelect');

  function openModal(carPreference = 'Any') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    if (carSelect) {
      // Find exact option matching the car preference or default to 'Any'
      const optionExists = Array.from(carSelect.options).some(opt => opt.value === carPreference);
      carSelect.value = optionExists ? carPreference : 'Any';
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Event Listeners for opening modal
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const carPreference = e.target.getAttribute('data-car') || 'Any';
      openModal(carPreference);
    });
  });

  // Event Listeners for closing modal
  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Form Submission
  const bookingForm = document.getElementById('bookingForm');
  const successMessage = document.getElementById('successMessage');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real app, send data to backend here
    // const formData = new FormData(bookingForm);
    // console.log(Object.fromEntries(formData));

    // Show success message
    bookingForm.style.display = 'none';
    successMessage.style.display = 'block';

    // Reset after 3 seconds and close modal
    setTimeout(() => {
      closeModal();
      setTimeout(() => {
        bookingForm.reset();
        bookingForm.style.display = 'block';
        successMessage.style.display = 'none';
      }, 300); // Wait for modal slide animation
    }, 3000);
  });
});
