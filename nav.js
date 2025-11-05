// Load navbar dynamically
fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav").innerHTML = data;

    // Menu Toggle Logic
    const menuToggle = document.getElementById("menuToggle");
    const fullscreenNav = document.getElementById("fullscreenNav");
    let menuOpen = false;
    menuToggle.addEventListener("click", () => {
      menuOpen = !menuOpen;
      if (menuOpen) {
        fullscreenNav.classList.add("show");
        menuToggle.textContent = "CLOSE";
      } else {
        fullscreenNav.classList.remove("show");
        menuToggle.textContent = "MENU";
      }
    });

    // Tour Form Logic
    const tourToggle = document.getElementById("tourToggle");
    const tourFormOverlay = document.getElementById("tourFormOverlay");
    const closeTourForm = document.getElementById("closeTourForm");

    // Function to open the tour form
    function openTourForm() {
      tourFormOverlay.classList.add("show");
      tourToggle.textContent = "CLOSE";
    }

    // Attach openTourForm to the "Schedule a Tour" toggle
    tourToggle.addEventListener("click", openTourForm);

    // Attach openTourForm to ALL buttons with class "open-tour-form"
    const openTourFormButtons = document.querySelectorAll(".open-tour-form");
    openTourFormButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the button from doing its default action
        openTourForm(); // Open the form
      });
    });

    // Close the tour form
    closeTourForm.addEventListener("click", () => {
      tourFormOverlay.classList.remove("show");
      tourToggle.textContent = "Schedule a Tour";
    });
  });
