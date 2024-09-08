/* ==================================================
-+-+-+-+-+ Resposive navbar component +-+-+-+-+-
================================================== */

const mobileNavbar = document.querySelector(".mobile-navbar-btn");
const navbar = document.querySelector(".navbar");

mobileNavbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  mobileNavbar.classList.toggle("nav-activ-btn");
  
}
  

);


/* ==================================================
-+-+-+-+-+ Protfolio section start +-+-+-+-+-
================================================== */

function filterProjects(btnNum) {
  const projectImages = document.querySelectorAll(
    ".portfolio-image .img-overlay"
  );
  const buttons = document.querySelectorAll(".p-btns .btn");

  buttons.forEach((button) => {
    // Remove the transformation style and box shadow from all buttons
    button.style.transform = "none";
    button.style.boxShadow = "none";

  });

  projectImages.forEach((image) => {
    if (btnNum === 1) {
      // Show all images
      image.style.display = "block";
    } else {
      // Hide images that don't match the selected filter
      const imageBtnNum = image.classList[1].split("--")[1];
      if (btnNum !== parseInt(imageBtnNum)) {
        image.style.display = "none";
      } else {
        image.style.display = "block";
      }
    }
  });

  // Apply the transformation style and box shadow to the clicked button
  buttons.forEach((button) => {
    if (button.getAttribute("data-btn-num") === btnNum.toString()) {
      button.style.transform = "translateY(-0.5rem)";
      button.style.boxShadow = ".5rem 1rem 1rem 0rem rgba(132, 144, 255, 0.3)";
    }
  });
}
//address

// Select the <p> element containing the location
let locationElement = document.querySelector('p');

// Extract the text content from the element
let locationText = locationElement.textContent;

// Display the extracted location in the console
console.log(locationText);

//dark mode 
// function myFunction(){
//   var body = document.querySelector(".body");
//   body.classList.toggle("dark-mode");
// }

// const btn=document.querySelector(".toggle-btn")
// btn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

// const btn = document.querySelector(".toggle-btn");
// btn.addEventListener("click", () => {
//   // Toggle dark mode classes
//   document.querySelector(".hero-section").classList.toggle("dark-mode");
//   document.querySelector(".bio-data-section").classList.toggle("dark-mode");
//   document.querySelector(".header").classList.toggle("dark-mode");
//   document.querySelector(".main").classList.toggle("dark-mode");
//   document.querySelector(".footer").classList.toggle("dark-mode");
//   document.querySelector(".protfolio-section").classList.toggle("dark-mode");

//   // Save dark mode preference
//   const isDarkMode = document.querySelector(".hero-section").classList.contains("dark-mode");
//   localStorage.setItem("darkModeEnabled", isDarkMode ? "true" : "false");
// });

// // Apply saved dark mode preference on page load
// window.addEventListener("DOMContentLoaded", () => {
//   const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
//   if (darkModeEnabled) {
//     document.querySelector(".hero-section").classList.add("dark-mode");
//     document.querySelector(".bio-data-section").classList.add("dark-mode");
//     document.querySelector(".header").classList.add("dark-mode");
//     document.querySelector(".main").classList.add("dark-mode");
//     document.querySelector(".section-footer").classList.add("dark-mode");
//     document.querySelector(".section-contact").classList.add("dark-mode");
//     document.querySelector(".service-section").classList.add("dark-mode");
//     document.querySelector(".section").classList.add("dark-mode");
  
//   }
// });

const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  // Toggle dark mode on the entire body
  document.body.classList.toggle("dark-mode");

  // Save dark mode preference in localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkMode ? "true" : "false");
});

// Apply saved dark mode preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
  }
});





/* ==================================================
-+-+-+-+-+ new section start +-+-+-+-+-
================================================== */