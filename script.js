const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

// Counter to keep track of which image we are on
let counter = 0;
const totalImages = images.length;

// The size of one image (updates if window resizes)
let size = images[0].clientWidth;

// Function to slide to the next image
function nextSlide() {
  if (counter == 0) {
    counter = 1;
  } else if (counter == 1) {
    counter = 2;
  } else if (counter == 2) {
    counter = 0;
  }
  // This line does the actual moving
  carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
}

// Run nextSlide every 3000 milliseconds (3 seconds)
setInterval(nextSlide, 3000);

// Optional: Fix alignment if user resizes window
window.addEventListener("resize", () => {
  size = images[0].clientWidth;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

const textElement = document.getElementById("typing-text");
const textToType = "Aptitude Guru Hem";

// Settings (in milliseconds)
const typingSpeed = 150; // How fast it types
const erasingSpeed = 100; // How fast it erases (usually faster)
const delayAfterType = 2000; // How long to wait after finishing text
const delayAfterErase = 500; // How long to wait before starting again

let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  // 1. Determine the text to show based on current index
  const currentText = textToType.substring(0, charIndex);
  textElement.textContent = currentText;

  // 2. Set the default speed for this turn
  let typeSpeed = isDeleting ? erasingSpeed : typingSpeed;

  // 3. Logic: Are we Typing or Deleting?
  if (!isDeleting && charIndex < textToType.length) {
    // Case A: Still typing
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    // Case B: Still erasing
    charIndex--;
  } else if (!isDeleting && charIndex === textToType.length) {
    // Case C: Finished typing -> Pause, then switch to delete
    isDeleting = true;
    typeSpeed = delayAfterType;
  } else if (isDeleting && charIndex === 0) {
    // Case D: Finished erasing -> Pause, then switch to type
    isDeleting = false;
    typeSpeed = delayAfterErase;
  }

  // 4. Run the function again after the determined speed
  setTimeout(typeLoop, typeSpeed);
}

// Start the loop
document.addEventListener("DOMContentLoaded", typeLoop);

const slideElement = document.getElementById("slide-text");

const slideTexts = [
  "fuel your startup ambitions",
  "accelerate your career growth",
  "master coding interviews",
];

let slideIndex = 0;

function changeText() {
  // 1. Fade Out (Remove the class)
  slideElement.classList.remove("visible");

  // 2. Wait for the fade-out (500ms matches your CSS transition time)
  setTimeout(() => {
    // 3. Change the actual text while it is invisible
    slideElement.textContent = slideTexts[slideIndex];

    // 4. Fade In (Add the class back)
    slideElement.classList.add("visible");

    // 5. Update index for next time
    slideIndex++;
    if (slideIndex >= slideTexts.length) {
      slideIndex = 0;
    }
  }, 500); // This 500ms delay matches the CSS transition time
}

// Start the first text immediately
changeText();

// Change text every 3000ms (3 seconds)
// 500ms fade out + 500ms fade in + 2000ms reading time
setInterval(changeText, 3000);
