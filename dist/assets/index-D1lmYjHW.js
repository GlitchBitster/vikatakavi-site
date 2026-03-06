(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const p=""+new URL("dzire-Cwq_yno_.png",import.meta.url).href,v=""+new URL("etios-OKOg9Sxp.png",import.meta.url).href,b=""+new URL("innova-DQa0xaRI.png",import.meta.url).href,s={brand:{name:"Vikatakavi",logoText:"Vikatakavi<span>.</span>"},navLinks:[{label:"Home",href:"#home"},{label:"Our Cars",href:"#fleet"},{label:"Contact",href:"#contact"}],hero:{title:"Reliable Rides Across Tamil Nadu",subtitle:"Affordable, comfortable, and well-maintained cars for all your travel needs.",ctaText:"Book Your Ride"},fleetSection:{title:"Our Popular Cars",subtitle:"Choose the perfect vehicle for your journey.",cars:[{id:"Dzire",name:"Maruti Suzuki Dzire",image:p,description:"Perfect for city commutes and small families. Excellent mileage and comfort."},{id:"Etios",name:"Toyota Etios",image:v,description:"Spacious cabin and reliable performance. Ideal for longer highway trips."},{id:"Innova",name:"Toyota Innova Crysta",image:b,description:"Premium 7-seater comfort for large families and group travel."}]},contact:{title:"Get in Touch",info:[{label:"Call Us",value:"+91 98765 43210"},{label:"Email",value:"contact@vikatakavi.in"},{label:"Location",value:"T. Nagar, Chennai, Tamil Nadu"}]},footer:{text:"Vikatakavi Travels. All rights reserved."},modal:{title:"Book Your Ride",subtitle:"Fill in the details and we'll confirm your trip shortly.",successMessage:"Nandri! Thank you for choosing Vikatakavi. Our team will call you shortly to confirm."}};function g(e){const i=e.navLinks.map(t=>`<a href="${t.href}">${t.label}</a>`).join("");return`
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">${e.brand.logoText}</a>
        <div class="nav-links">
          ${i}
          <button class="nav-cta book-now-btn">Book Now</button>
        </div>
      </div>
    </nav>
  `}function h(e){return`
    <header id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${e.hero.title}</h1>
        <p class="hero-subtitle">${e.hero.subtitle}</p>
        <button class="primary-btn book-now-btn">${e.hero.ctaText}</button>
      </div>
    </header>
  `}function y(e){const i=e.fleetSection.cars.map(t=>`
    <div class="car-card">
      <div class="car-image-container">
        <img src="${t.image}" alt="${t.name}" class="car-image">
      </div>
      <div class="car-details">
        <h3>${t.name}</h3>
        <p>${t.description}</p>
        <button class="secondary-btn book-now-btn" data-car="${t.id}">Reserve Now</button>
      </div>
    </div>
  `).join("");return`
    <section id="fleet" class="fleet-section">
      <div class="container">
        <h2 class="section-title">${e.fleetSection.title}</h2>
        <p class="section-subtitle">${e.fleetSection.subtitle}</p>
        <div class="fleet-grid">
          ${i}
        </div>
      </div>
    </section>
  `}function k(e){const i=e.contact.info.map(t=>`
    <div class="info-item">
      <span class="info-label">${t.label}</span>
      <p>${t.value}</p>
    </div>
  `).join("");return`
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-card">
          <h2 class="section-title">${e.contact.title}</h2>
          <div class="contact-info">
            ${i}
          </div>
        </div>
      </div>
    </section>
  `}function $(e){return`
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <h2 class="footer-logo">${e.brand.logoText}</h2>
          <p>&copy; <span id="year">${new Date().getFullYear()}</span> ${e.footer.text}</p>
        </div>
      </div>
    </footer>
  `}function w(e){const i=e.fleetSection.cars.map(t=>`<option value="${t.id}">${t.name}</option>`).join("");return`
    <div class="modal-overlay" id="bookingModal">
      <div class="modal-content">
        <button class="close-modal" id="closeModal">&times;</button>
        <h2 class="modal-title">${e.modal.title}</h2>
        <p class="modal-subtitle">${e.modal.subtitle}</p>

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
              ${i}
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
          <p>${e.modal.successMessage}</p>
        </div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    ${g(s)}
    ${h(s)}
    ${y(s)}
    ${k(s)}
    ${$(s)}
    ${w(s)}
  `;const i=document.getElementById("year");i&&(i.textContent=new Date().getFullYear());const t=document.getElementById("bookingModal"),r=document.querySelectorAll(".book-now-btn"),o=document.getElementById("closeModal"),a=document.getElementById("carSelect");function l(n="Any"){if(t.classList.add("active"),document.body.style.overflow="hidden",a){const u=Array.from(a.options).some(m=>m.value===n);a.value=u?n:"Any"}}function d(){t.classList.remove("active"),document.body.style.overflow=""}r.forEach(n=>{n.addEventListener("click",u=>{const m=u.target.getAttribute("data-car")||"Any";l(m)})}),o.addEventListener("click",d),t.addEventListener("click",n=>{n.target===t&&d()});const c=document.getElementById("bookingForm"),f=document.getElementById("successMessage");c.addEventListener("submit",n=>{n.preventDefault(),c.style.display="none",f.style.display="block",setTimeout(()=>{d(),setTimeout(()=>{c.reset(),c.style.display="block",f.style.display="none"},300)},3e3)})});
