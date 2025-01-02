// JavaScript to toggle the navigation menu visibility on smaller screens
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

//Slider for container DnevnaDoza
let currentIndex = 0;

function updateNavButtons() {
  const sliderInner = document.getElementById("slider-inner");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  const totalCardsWidth = cards.length * cardWidth;
  const visibleWidth = sliderInner.offsetWidth;

  // Check if scrolling is needed
  if (totalCardsWidth <= visibleWidth) {
    // Hide both buttons if all cards are visible
    document.querySelector(".nav-btn.left").style.display = "none";
    document.querySelector(".nav-btn.right").style.display = "none";
  } else {
    // Adjust button visibility based on currentIndex
    document.querySelector(".nav-btn.left").style.display =
      currentIndex === 0 ? "none" : "block";
    document.querySelector(".nav-btn.right").style.display =
      currentIndex >= Math.ceil((totalCardsWidth - visibleWidth) / cardWidth)
        ? "none"
        : "block";
  }
}

function slide(direction) {
  const sliderInner = document.getElementById("slider-inner");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  const totalCardsWidth = cards.length * cardWidth;
  const visibleWidth = sliderInner.offsetWidth;

  const maxIndex = cards.length - 1; // Adjust index for centering

  // Update currentIndex based on direction
  currentIndex += direction;

  // Clamp the currentIndex to valid values
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  // Calculate the new position to center the card
  const offset = Math.max(0, (visibleWidth - cardWidth) / 2); // Space to center card
  const transformX = currentIndex * cardWidth - offset;

  // Ensure transformX doesn't move past the first or last card
  const maxTransform = totalCardsWidth - visibleWidth;
  sliderInner.style.transform = `translateX(-${Math.min(
    Math.max(transformX, 0),
    maxTransform
  )}px)`;

  // Update navigation button visibility
  updateNavButtons();
}

// Initialize button visibility on page load and resize
document.addEventListener("DOMContentLoaded", () => {
  updateNavButtons();
});
window.addEventListener("resize", () => {
  updateNavButtons(); // Adjust visibility on window resize
});

//END of slider container DnevnaDoza

/*
// Animation for the midtext spans
const midtextSpans = document.querySelectorAll(".midtext span");
let colorIndex = 0;

const colors = [
  "orange",
  "green",
  "pink",
  "red",
  "brown",
  "purple",
  "blue",
  "yellow",
];

// Function to animate spans with movement and circular rotation
function animateMidtextSpans() {
  midtextSpans.forEach((span, index) => {
    // Change color periodically
    setInterval(() => {
      span.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1000); // Change color every 1 second
  });
}

// Trigger the animation when the page is loaded
window.onload = () => {
  animateMidtextSpans();
};

/*
// JavaScript to toggle the navigation menu visibility on smaller screens
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// Animation for the midtext spans
const midtextSpans = document.querySelectorAll(".midtext span");
let colorIndex = 0;

const colors = [
  "orange",
  "green",
  "pink",
  "red",
  "brown",
  "purple",
  "blue",
  "yellow",
];

// Function to animate spans with movement and circular rotation
function animateMidtextSpans() {
  midtextSpans.forEach((span, index) => {
    // Add circular movement and horizontal transition
    span.style.animation = `moveAndSpin 4s infinite ease-in-out ${index * 2}s`;

    // Change color periodically
    setInterval(() => {
      span.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 2000); // Change color every 1 second
  });
}

// Trigger the animation when the page is loaded
window.onload = () => {
  animateMidtextSpans();
};
*/
