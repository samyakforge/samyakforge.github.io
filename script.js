
// 1. Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// 3. Highlight the active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                const isActive =
                    link.getAttribute("href") === `#${entry.target.id}`;

                link.classList.toggle("active", isActive);
            });
        }
    });
}, {
    threshold: 0.4
});

sections.forEach((section) => {
    navObserver.observe(section);
});
