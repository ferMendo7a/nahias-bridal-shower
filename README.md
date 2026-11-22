# Tecito de casa

Landing page mobile-first para compartir la información del té de cocina de Nahiara, confirmar asistencia por WhatsApp y acceder a la ubicación y la lista de regalos.

## Stack elegido

- **HTML5** para la estructura del contenido.
- **CSS3** para el diseño responsive y la identidad visual.
- **JavaScript nativo** para copiar el alias, validar el nombre y preparar el mensaje de WhatsApp.

Se eligió un sitio estático sin framework porque:

- No necesita compilación ni dependencias de ejecución.
- Es rápido de desarrollar, probar y mantener.
- Funciona directamente desde los navegadores modernos.
- Se adapta al alcance reducido de la landing.
- Puede publicarse gratuitamente como archivos estáticos.

## Hosting elegido

**Netlify** será la plataforma de publicación.

Motivos:

- Ofrece hosting gratuito para sitios estáticos.
- Permite publicar desde un repositorio Git o mediante carga manual.
- No requiere servidor ni configuración de base de datos.
- Es compatible con HTTPS y enlaces públicos.

### Alternativas evaluadas

- **GitHub Pages:** válida y gratuita, con integración directa al repositorio, aunque el flujo de publicación depende de la configuración de GitHub.
- **Cloudflare Pages:** también adecuada para sitios estáticos, pero agrega un proveedor más a la configuración inicial.

Netlify ofrece el flujo más directo para el objetivo actual. El uso de cualquiera de estas plataformas no implica costo para el alcance definido; el deploy se realizará únicamente después de aprobar la versión local.

## Requisitos documentados

La especificación funcional, los textos y los criterios de aceptación están en `prompts/requirements.md`.

El flyer de referencia visual se encuentra en `prompts/files/flyer-example.png`.

## Ejecución local

La base técnica no necesita instalación de paquetes. Durante la construcción del MVP se podrá usar un servidor HTTP local o la extensión Live Server de VS Code.

## Presupuesto

El proyecto debe implementarse y publicarse con costo total de **Gs. 0**. No deben agregarse servicios pagos, suscripciones ni productos que requieran una tarjeta.
