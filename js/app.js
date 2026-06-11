document.addEventListener("DOMContentLoaded", () => {

    // HEADER SCROLL
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.style.padding = "8px 0";
            header.style.background = "rgba(10, 26, 47, 0.99)";
        } else {
            header.style.padding = "12px 0";
            header.style.background = "rgba(10, 26, 47, 0.97)";
        }
    });

    // ACTIVE MENU LINK on scroll
    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const allInputs = contactForm.querySelectorAll("input, textarea");
            let isValid = true;
            allInputs.forEach(field => {
                if (field.value.trim() === "") isValid = false;
            });
            if (!isValid) {
                alert("Por favor complete todos los campos.");
            } else {
                alert("Gracias por contactarnos. Responderemos su consulta en menos de 24 horas.");
                contactForm.reset();
            }
        });
    }

});