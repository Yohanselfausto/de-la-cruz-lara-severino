document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page || "";
    const active = document.body.dataset.active || "";

    const isHome =
        page === "home" ||
        location.pathname.endsWith("/") ||
        location.pathname.endsWith("/index.html") ||
        location.pathname.endsWith("\\index.html") ||
        location.pathname === "";

    const linkTo = (id) => isHome ? `#${id}` : `index.html#${id}`;
    const activeClass = (id) => active === id ? "active" : "";

    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    if (headerTarget) {
        headerTarget.innerHTML = `
            <header class="header">
                <div class="container nav-container">
                    <a href="${linkTo("inicio")}" class="logo-area" aria-label="Ir al inicio">
                        <img src="images/logo.png" alt="Logo De la Cruz, Lara & Severino" class="logo-img">
                        <div class="logo-text">
                            <div class="logo-firma">De la Cruz, Lara <span>&</span> Severino</div>
                            <div class="logo-sub">ABOGADOS</div>
                        </div>
                    </a>

                    <nav>
                        <ul class="menu">
                            <li><a href="${linkTo("inicio")}" class="${activeClass("inicio")}">Inicio</a></li>
                            <li><a href="${linkTo("sobre-nosotros")}" class="${activeClass("sobre-nosotros")}">Sobre nosotros</a></li>
                            <li><a href="${linkTo("servicios")}" class="${activeClass("servicios")}">Servicios</a></li>
                            <li><a href="${linkTo("contacto")}" class="${activeClass("contacto")}">Contacto</a></li>
                        </ul>
                    </nav>

                    <a href="${linkTo("contacto")}" class="btn-header">
                        <i class="fas fa-calendar-alt"></i> Agenda tu consulta
                    </a>
                </div>
            </header>
        `;
    }

    if (footerTarget) {
        footerTarget.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-logo-area">
                            <div class="footer-logo-wrap">
                                <img src="images/logo.png" alt="Logo" class="footer-logo-img">
                                <div>
                                    <div class="logo-firma-footer">De la Cruz, Lara <span>&</span> Severino</div>
                                    <div class="logo-sub-footer">ABOGADOS</div>
                                    <div class="logo-eslogan-footer">COMPROMISO LEGAL. SOLUCIONES REALES.</div>
                                </div>
                            </div>

                            <div class="footer-social">
                                <a href="https://www.linkedin.com/company/de-la-cruz-lara-y-severino/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/dls.abogados" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/share/18oiuTxrkp/?mibextid=wwXIfr" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.tiktok.com/@dls.abogados" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a>
                                <a href="https://wa.me/18299872857" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                                <a href="mailto:info@delacruzlaraseverino.com" title="Email"><i class="fas fa-envelope"></i></a>
                            </div>
                        </div>

                        <div class="footer-links">
                            <div class="footer-col">
                                <h4>ENLACES RÁPIDOS</h4>
                                <ul>
                                    <li><a href="${linkTo("inicio")}">Inicio</a></li>
                                    <li><a href="${linkTo("sobre-nosotros")}">Sobre nosotros</a></li>
                                    <li><a href="${linkTo("servicios")}">Servicios</a></li>
                                    <li><a href="${linkTo("contacto")}">Contacto</a></li>
                                    <li><a href="privacy-policy.html">Política de Privacidad</a></li>
                                </ul>
                            </div>

                            <div class="footer-col">
                                <h4>CONTACTO</h4>
                                <ul>
                                    <li><i class="fas fa-phone-alt"></i><i class="fab fa-whatsapp"></i> +1 (829) 987-2857 - Fausto De La Cruz</li>
                                    <li><i class="fas fa-phone-alt"></i><i class="fab fa-whatsapp"></i> +1 (849) 530-5221 - Flor Lara</li>
                                    <li><i class="fas fa-phone-alt"></i><i class="fab fa-whatsapp"></i> +1 (849) 259-8799 - Nathanael Severino</li>
                                    <li><i class="fas fa-envelope"></i> info@delacruzlaraseverino.com</li>
                                    <li><i class="fas fa-map-marker-alt"></i> Santo Domingo, República Dominicana</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>© 2026 De la Cruz, Lara & Severino Abogados. Todos los derechos reservados.</p>
                        <p class="footer-quote">Diseñado con excelencia para proteger lo que más importa.</p>
                    </div>
                </div>
            </footer>

            <a href="https://wa.me/18299872857" class="whatsapp-btn" target="_blank" title="Escríbenos por WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        `;
    }
});
