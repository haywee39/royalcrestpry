// LOADER 
    let percent = 0;
    let percentageText = document.getElementById("percentage");
    let progressBarFill = document.querySelector(".progress-bar-fill");
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");

    let interval = setInterval(() => {
      percent++;
      percentageText.textContent = percent + "%";
      progressBarFill.style.width = percent + "%";

      if (percent >= 100) {
        clearInterval(interval);
        loader.classList.add("fade-out");
        setTimeout(() => {
          loader.style.display = "none";
          content.style.display = "block";
        }, 800);
      }
    }, 30); // Adjust speed (30ms × 100 = 3 seconds total)

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// // FULLSCREEN MENU DESIGN
//   const menuToggle = document.getElementById("menuToggle");
//   const fullscreenNav = document.getElementById("fullscreenNav");
//   let menuOpen = false;

//   menuToggle.addEventListener("click", () => {
//     menuOpen = !menuOpen;
//     if (menuOpen) {
//       fullscreenNav.classList.add("show");
//       menuToggle.textContent = "CLOSE";
//     } else {
//       fullscreenNav.classList.remove("show");
//       menuToggle.textContent = "MENU";
//     }
//   });
// *******************************************************

// TYPING EFFECT OF CORE VALUES 
  const words = ["CHARACTER", "KNOWLEDGE", "CONFIDENCE"];
    let i = 0;      // index of word
    let j = 0;      // index of letter
    let currentWord = "";
    let isDeleting = false;
    const speed = 150;   // typing speed
    const eraseSpeed = 100; // deleting speed
    const delayBetween = 1000; // pause before deleting

    function typeEffect() {
      const typingElement = document.getElementById("typing");

      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
        typingElement.textContent = currentWord;
        setTimeout(typeEffect, speed);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
        typingElement.textContent = currentWord;
        setTimeout(typeEffect, eraseSpeed);
      } else if (!isDeleting && j > words[i].length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
      } else if (isDeleting && j < 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(typeEffect, speed);
      }
    }

    typeEffect();

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// ANIMATED SCROLL 

document.addEventListener('DOMContentLoaded', () => {

    // Scroll Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Select all sections to animate
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});


// TESTIMONIAL ON HOMEPAGE 
// Carousel Logic
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots dynamically
cards.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

prevBtn.addEventListener("click", () => {
  let index = current - 1;
  if (index < 0) index = cards.length - 1;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-slide
setInterval(() => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
}, 6000);




