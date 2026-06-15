document.addEventListener("DOMContentLoaded", () => {

    // HEADER SCROLL
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                header.style.padding = "8px 0";
                header.style.background = "rgba(10, 26, 47, 0.99)";
            } else {
                header.style.padding = "12px 0";
                header.style.background = "rgba(10, 26, 47, 0.97)";
            }
        });
    }

    // ACTIVE MENU LINK on scroll
    const isHomePage =
        document.body.dataset.page === "home" ||
        location.pathname.endsWith("/") ||
        location.pathname.endsWith("/index.html") ||
        location.pathname.endsWith("\\index.html") ||
        location.pathname === "" ||
        location.href.includes("index.html");

    if (isHomePage) {
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
                if (link.getAttribute("href") === "#" + current || link.getAttribute("href") === "index.html#" + current) {
                    link.classList.add("active");
                }
            });
        });
    }

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

    // CONTACT FORM — alternativa gratis con FormSubmit, sin Worker y sin abrir Outlook/Gmail
    const form = document.getElementById("contactForm");

    if (form) {
        const btn = document.getElementById("submitBtn");
        const status = document.getElementById("formStatus");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                nombre: document.getElementById("f-nombre").value.trim(),
                email: document.getElementById("f-email").value.trim(),
                telefono: document.getElementById("f-telefono").value.trim(),
                asunto: document.getElementById("f-asunto").value.trim(),
                mensaje: document.getElementById("f-mensaje").value.trim()
            };

            if (!data.nombre || !data.email || !data.telefono || !data.asunto || !data.mensaje) {
                status.style.color = "#b8860b";
                status.textContent = "Completa todos los campos antes de enviar.";
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            status.style.color = "";
            status.textContent = "";

            try {
                const res = await fetch("https://formsubmit.co/ajax/b59497ce6d645fa61b2d5178d890c82e", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        _subject: "Nueva consulta desde el sitio web",
                        _template: "table",
                        _captcha: "false",

                        Nombre: data.nombre,
                        Correo: data.email,
                        Telefono: data.telefono,
                        Asunto: data.asunto,
                        Mensaje: data.mensaje
                    })
                });

                const json = await res.json().catch(() => ({}));

                if (!res.ok) {
                    throw new Error(json.message || "No se pudo enviar el mensaje.");
                }

                status.style.color = "#2e7d32";
                status.textContent = "✔ Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.";
                form.reset();

            } catch (error) {
                console.error("Error enviando el formulario:", error);
                status.style.color = "#b00020";
                status.textContent = "No se pudo enviar el mensaje. Si es la primera vez, revisa el correo de confirmación de FormSubmit en Gmail.";
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
            }
        });
    }

});
