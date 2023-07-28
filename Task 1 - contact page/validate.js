// function toggleMenu() {
//   const navbarMenu = document.getElementById('navbarMenu');
//   navbarMenu.classList.toggle('expanded');
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function submitForm(event) {
  event.preventDefault();

  // Validate email format
  const emailInput = document.getElementById('email');
  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate phone number format
  const phoneInput = document.getElementById('phone');
  if (!validatePhone(phoneInput.value)) {
    alert('Please enter a valid phone number with a maximum of 10 digits.');
    phoneInput.focus();
    return;
  }

  // Validate phone number format
  const nameInput = document.getElementById('name');
  if (!validatename(nameInput.value)) {
    alert('Name should contain letters only');
    nameInput.focus();
    return;
  }

  // Form submission successful
  document.getElementById('contactForm').reset();
  document.getElementById('successMessage').classList.remove('hidden');
  setTimeout(hideSuccessMessage, 4000);
}

function hideSuccessMessage() {
  document.getElementById('successMessage').classList.add('hidden');
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function validatename(name) {
  const nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(name);
}

