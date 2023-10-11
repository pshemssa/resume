// Toggle mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("show");
});
// Create an image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slider-item");

function showSlide(slideIndex) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".next-button").addEventListener("click", nextSlide);
document.querySelector(".prev-button").addEventListener("click", prevSlide);
showSlide(currentSlide);
// Form validation example
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const email = document.querySelector("#email").value;
  if (!email.includes("@")) {
    event.preventDefault();
    alert("Please enter a valid email address.");
  }
});
