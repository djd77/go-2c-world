const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Event listener to open menu when hamburger menu is clicked
hamburger.addEventListener("click", mobileMenu);

//Event listener to close menu when either the hamburger menu is clicked
// when the menu is open, or a link in the menu is clicked
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
	// function adds an "active" class on .hamburger and .nav-menu
	// which makes the menu open
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

function closeMenu() {
	// removes "active" class from .hamburger and .nav-menu which
	// makes the menu close
	hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
