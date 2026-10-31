
// Update the footer year automatically
const year = document.querySelector("footer");

if (year) {
    year.textContent = `© ${new Date().getFullYear()} Samyak. Built with HTML, CSS & JavaScript.`;
}

// Reveal sections when they enter the screen
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});
