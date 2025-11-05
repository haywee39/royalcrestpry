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
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  // *********************************************************************************
  document.addEventListener('DOMContentLoaded', () => {
            const contentDivs = document.querySelectorAll('.content-div');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5 // Adjust this value to control when the animation triggers
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        // Optional: remove 'visible' class when out of view to re-trigger on scroll back
                        entry.target.classList.remove('visible');
                    }
                });
            }, observerOptions);

            contentDivs.forEach(div => {
                observer.observe(div);
            });
        });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// *******************************************************
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

// ABOUT SCRIPT 
// ************************************************************************
// THE TEAM PROFILE IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".team-profile");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});

