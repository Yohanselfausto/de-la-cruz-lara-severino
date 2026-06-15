/*
    Control simple para que esta página sea usada desde el QR.

    El QR debe apuntar a:
    https://delacruzlaraseverino.com/qr-dls-contactos-2026.html?qr=tarjeta-dls

    Si alguien entra sin el parámetro ?qr=tarjeta-dls en producción,
    será enviado al inicio.

    Nota:
    Esto no es una seguridad absoluta. Si alguien comparte el enlace completo,
    otra persona podrá abrirlo. Para un sitio estático, esta es una forma práctica
    de mantener la página fuera del menú, fuera de buscadores y fuera de navegación normal.
*/

(function () {
    const requiredToken = "tarjeta-dls";
    const params = new URLSearchParams(window.location.search);
    const token = params.get("qr");

    const isLocalFile = window.location.protocol === "file:";

    if (!isLocalFile && token !== requiredToken) {
        window.location.replace("index.html");
    }
})();
