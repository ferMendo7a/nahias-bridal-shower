# Plan de implementación — Tecito de casa

## 1. Principios de trabajo

- Desarrollar una única landing page mobile-first.
- Mantener el proyecto como sitio estático con HTML, CSS y JavaScript nativo.
- Implementar únicamente los contenidos y comportamientos aprobados en `requirements.md`.
- Mantener costo cero: no agregar servicios pagos ni dependencias innecesarias.
- Validar cada fase antes de avanzar a la siguiente.
- Completar primero el MVP local; realizar el deploy solo después de aprobar las iteraciones.

## 2. Resultado esperado

Una landing publicada en Netlify que permita:

- Consultar fecha, lugar y monto de la reserva.
- Abrir la ubicación del evento en Google Maps.
- Copiar el alias bancario.
- Ingresar un nombre y confirmar la asistencia por WhatsApp.
- Consultar la lista de regalos.
- Compartir una invitación mediante la plantilla preparada para ese fin.

## 3. Fase A — Crear la base del proyecto

### Tareas

1. Crear `index.html` como punto de entrada de la landing.
2. Crear los estilos principales en `styles.css`.
3. Crear las interacciones en `script.js`.
4. Incorporar la carpeta de recursos visuales necesaria para la página.
5. Referenciar CSS y JavaScript desde `index.html`.
6. Configurar metadatos básicos de título, descripción, idioma y viewport.

### Criterios de cierre

- La página abre sin errores desde un servidor local.
- Los archivos HTML, CSS y JavaScript están enlazados correctamente.
- No hay dependencias externas ni paquetes que instalar para ejecutar el MVP.

## 4. Fase B — Implementar el contenido

### Tareas

1. Construir el encabezado con:
   - Título: `Tecito de casa`.
   - Subtítulo aprobado en los requisitos.
2. Construir el bloque de información sin título visible:
   - Fecha: 06 de diciembre de 2026.
   - Lugar: Mi Evento.
   - Reserva: Gs. 60.000 por persona.
   - Acción para abrir Google Maps.
3. Construir la sección de confirmación:
   - Título aprobado.
   - Fecha límite del jueves 3 de diciembre.
   - Paso 1 con los datos bancarios.
   - Paso 2 con el formulario de nombre y el botón de WhatsApp.
   - Paso 3 indicando que se envíe el comprobante en la misma conversación.
4. Incorporar el acceso a la lista de regalos.
5. Evitar agregar una hora, porque no fue proporcionada.
6. Evitar las acciones y campos excluidos explícitamente por los requisitos.

### Criterios de cierre

- Todos los datos coinciden con `requirements.md`.
- Los enlaces externos corresponden exactamente a las URLs aprobadas.
- No se muestran secciones, campos ni botones excluidos.
- La estructura semántica y el orden de contenido son comprensibles.

## 5. Fase C — Aplicar el diseño

### Tareas

1. Definir variables de color basadas en crema, blanco, rosa y marrón.
2. Tomar el flyer como referencia de atmósfera visual, sin copiarlo literalmente.
3. Diseñar primero para pantallas pequeñas.
4. Adaptar la composición a tabletas y escritorio mediante media queries.
5. Crear tarjetas y separación visual suficiente para cada bloque de información.
6. Asegurar contraste y tamaños legibles.
7. Dar a los botones y campos táctiles dimensiones cómodas.
8. Incorporar estados visuales para foco, interacción y mensajes de estado.

### Criterios de cierre

- El contenido se puede leer y operar en un ancho de teléfono.
- No existe desplazamiento horizontal inesperado.
- Los colores mantienen suficiente contraste.
- Los elementos interactivos son claramente reconocibles.

## 6. Fase D — Implementar las interacciones

### Copia del alias

1. Asociar el botón al valor `0972493848`.
2. Usar la API Clipboard cuando esté disponible.
3. Incorporar un fallback compatible cuando no esté disponible.
4. Informar visualmente que la copia se realizó o que falló.

### Confirmación por WhatsApp

1. Tomar el nombre ingresado y eliminar espacios innecesarios.
2. Impedir continuar si el campo está vacío.
3. Mostrar una validación clara y accesible.
4. Generar el enlace para `+595972493848`.
5. Codificar correctamente el nombre y el mensaje antes de abrir WhatsApp.
6. Abrir el chat con un mensaje prearmado que incluya el nombre.

### Criterios de cierre

- El alias copiado es exactamente `0972493848`.
- No se abre WhatsApp sin un nombre válido.
- El mensaje incluye el nombre ingresado.
- Los enlaces externos abren destinos correctos.

## 7. Fase E — Crear recursos complementarios

### Tareas

1. Crear la plantilla Markdown para enviar la invitación.
2. Incluir los marcadores `{persona}` y `{link_landing}`.
3. Mantener `{link_landing}` pendiente hasta completar el deploy.
4. Ajustar el documento solo si la URL pública definitiva cambia.

### Criterios de cierre

- La plantilla contiene el texto aprobado.
- No se usa una URL inventada ni un marcador reemplazado antes del deploy.

## 8. Fase F — Verificación local

### Pruebas funcionales

- Cargar la landing localmente.
- Verificar los textos y datos visibles.
- Probar el enlace de Google Maps.
- Probar el enlace de Wishwave.
- Probar la copia del alias con el flujo principal.
- Probar el formulario con nombre vacío.
- Probar el formulario con un nombre válido, incluidos acentos.
- Revisar que el enlace generado apunte al número correcto.

### Pruebas responsive y visuales

- Revisar un ancho aproximado de 375 px.
- Revisar un ancho móvil grande aproximado de 430 px.
- Revisar una tableta o escritorio mediano.
- Comprobar que no haya contenido cortado ni desbordamientos.
- Comprobar contraste, foco y legibilidad.

### Pruebas técnicas

- Revisar errores de consola.
- Revisar enlaces y recursos rotos.
- Validar que la ejecución local no requiera una compilación previa.

## 9. Fase G — Iteraciones y aprobación

1. Mostrar la versión local al usuario.
2. Registrar cambios solicitados sin modificar silenciosamente decisiones aprobadas.
3. Confirmar el alcance de cualquier cambio nuevo antes de implementarlo.
4. Repetir las pruebas afectadas después de cada ajuste.
5. Mantener la especificación y el plan alineados con el resultado aprobado.
6. Considerar el MVP cerrado cuando el usuario apruebe el diseño y las interacciones.

## 10. Fase H — Deploy en Netlify

### Preparación

1. Confirmar que el usuario apruebe la versión local.
2. Verificar que no existan archivos sensibles ni temporales para publicar.
3. Confirmar que `index.html` esté en la raíz del sitio.
4. Revisar nuevamente los enlaces y el formulario antes del deploy.

### Publicación

1. Publicar el sitio estático en Netlify mediante el flujo gratuito acordado.
2. Obtener la URL pública.
3. Revisar la versión publicada en un dispositivo móvil si está disponible.
4. Verificar los enlaces externos, la copia del alias y la confirmación por WhatsApp en la versión publicada.
5. Reemplazar `{link_landing}` en la plantilla de invitación con la URL definitiva.

### Criterios de cierre final

- Existe una URL pública accesible por HTTPS.
- El sitio publicado coincide con la versión aprobada localmente.
- Los flujos principales funcionan desde la web publicada.
- La plantilla de invitación contiene el enlace definitivo.
- No se activó ni requiere ningún servicio de pago.

## 11. Orden recomendado de ejecución

1. Base del proyecto.
2. Contenido semántico.
3. Diseño responsive.
4. Interacciones.
5. Plantilla de invitación.
6. Pruebas locales.
7. Iteraciones y aprobación.
8. Deploy y verificación publicada.
