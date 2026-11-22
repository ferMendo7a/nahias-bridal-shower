# Requisitos de la landing — Tecito de casa

## 1. Objetivo del producto

Crear una landing page para invitar y orientar a las personas que asistirán al té de cocina de Nahia. En todo el documento y en la web, el evento se denominará **Tecito de casa**.

La página debe permitir consultar de manera simple:

- La fecha y el lugar del evento.
- La ubicación en Google Maps.
- El monto de la reserva.
- Los datos necesarios para realizar la transferencia.
- Un enlace a la lista de regalos.
- La confirmación de asistencia por WhatsApp.

El resultado esperado es una página publicada mediante un enlace accesible desde el teléfono celular.

## 2. Alcance

### Debe incluir

- Una única página con desplazamiento vertical.
- Diseño mobile-first, adaptable a tamaños mayores.
- Bloques visualmente separados para la información y las acciones.
- Interacciones simples mediante enlaces, botones y un formulario mínimo.
- Botón para copiar el alias bancario.
- Confirmación por WhatsApp con un mensaje que incluya el nombre ingresado.
- Contenido totalmente del lado del cliente.

### No debe incluir

- Base de datos.
- Panel administrativo.
- Sistema de cuentas o autenticación.
- Botones de respuesta “Sí/No”.
- Campo opcional de mensaje para Nahia.
- Mensaje adicional para quienes no puedan asistir.
- Botón independiente para enviar el comprobante.
- Funcionalidades, secciones o textos que no estén solicitados expresamente.

Cualquier posible mejora no contemplada deberá proponerse y esperar aprobación antes de implementarse.

## 3. Restricciones del proyecto

- Presupuesto: **Gs. 0** de inicio a fin.
- Usar tecnologías y servicios con planes gratuitos que no requieran tarjeta.
- Priorizar la simplicidad, la rapidez de implementación y el mantenimiento mínimo.
- Evitar arquitectura, dependencias y configuraciones innecesarias.
- Audiencia estimada: entre 10 y 50 visitantes.
- La primera versión debe poder ejecutarse localmente antes del deploy.

## 4. Contenido y enlaces confirmados

### Referencias

- Diseño de referencia, no copiar literalmente:
  - https://despedidadenahia.netlify.app
- Ubicación del evento en Google Maps:
  - https://maps.app.goo.gl/zM4kKaCx3dd25XVt8?g_st=ic
- Lista de regalos:
  - https://www.wishwave.com/lists/babf8964-0f18-4f3a-9a88-639c17372127
- Archivo visual de referencia:
  - `./prompts/files/flyer-example.png`

## 5. Estructura de la landing

### 5.1. Encabezado

Al comienzo de la página debe mostrarse el título con una tipografía y composición distintivas, acompañado de la paleta visual del evento.

- **Título:** Tecito de casa
- **Subtítulo:** Te invitamos a compartir una linda tarde de merienda junto a nuestra querida novia Nahiara 👰🏻💕

El subtítulo debe quedar debajo del título, con menor tamaño y menor protagonismo visual.

### 5.2. Información básica

Esta sección no tendrá un título visible. Debe presentar, de forma fácil de escanear:

- **Fecha:** 06 de diciembre de 2026
- **Lugar:** Mi Evento
- **Reserva:** Gs. 60.000 por persona

El lugar incluirá un botón o enlace visible que abra la ubicación indicada en Google Maps. La referencia menciona “fecha y hora”, pero no se proporcionó una hora; no debe inventarse. Si se desea mostrarla, será necesario confirmarla antes de implementarla.

La distribución debe ser original y no una copia exacta del sitio de referencia.

### 5.3. Confirmación de asistencia

Esta sección debe reunir los pasos para reservar el lugar y confirmar la asistencia. Puede conservar una estructura similar a “¿Contamos con vos?” del ejemplo, pero con una presentación propia.

- **Título propuesto:** ¿Contamos con vos?
- **Subtítulo propuesto:** Reservá tu lugar con la transferencia antes del jueves 3 de diciembre.

La fecha límite del jueves 3 de diciembre debe mantenerse.

#### Paso 1 — Realizar la transferencia

Presentar una tarjeta o bloque con estos datos:

- **Monto:** Gs. 60.000
- **Titular:** Mónica Sanabria
- **Alias:** 0972493848
- **Banco:** Interfisa

Debe incluir un botón para copiar el alias `0972493848` y mostrar una confirmación breve cuando la copia se haya realizado correctamente.

Texto inferior sugerido:

> Conservá el comprobante para compartirlo en el siguiente paso.

#### Paso 2 — Confirmar por WhatsApp

Mostrar un formulario mínimo con:

- Un campo de nombre obligatorio.
- Un botón con el texto **Confirmar por Whatsapp**.

Al activar el botón:

1. Validar que se haya ingresado un nombre.
2. Abrir WhatsApp con el número `+595972493848`.
3. Preparar un mensaje que confirme la asistencia e incluya el nombre ingresado.

Texto sugerido para el mensaje generado:

> Hola, soy {nombre}. Confirmo mi asistencia al Tecito de casa. También voy a enviar mi comprobante de la transferencia.

#### Paso 3 — Enviar el comprobante

Indicar que el comprobante se envía por la misma conversación de WhatsApp abierta en el paso anterior.

No se agregará un botón independiente para esta acción ni una etiqueta final en la parte inferior.

### 5.4. Lista de regalos

Incluir un enlace claro a la lista externa proporcionada:

https://www.wishwave.com/lists/babf8964-0f18-4f3a-9a88-639c17372127

## 6. Estilo visual

- Paleta principal: blanco crema, rosa y marrón.
- Incorporar tonos derivados compatibles con esa paleta.
- Basarse en el flyer de referencia sin copiar su composición de forma literal.
- Transmitir calidez, cercanía y delicadeza acorde con una merienda y un evento de novia.
- Priorizar legibilidad, contraste y facilidad de uso en pantallas pequeñas.
- Los botones deben ser claramente reconocibles y cómodos para tocar.

## 7. Recurso adicional: mensaje de invitación

Crear un archivo Markdown con una plantilla editable. Debe conservar los siguientes espacios reservados:

- `{persona}`: nombre de la invitada.
- `{link_landing}`: enlace público de la landing, que se completará después del deploy.

Texto base:

> Hola {persona} 💕  
> Estás invitada a compartir una linda tarde de merienda junto a nuestra querida novia Nahiara 👰🏻💕  
> Toda la info y la confirmación están acá 👇  
> {link_landing}

## 8. Criterios de aceptación

La implementación se considerará completa cuando:

- La página muestre todos los datos confirmados y únicamente las acciones solicitadas.
- El enlace de ubicación abra Google Maps.
- El enlace de regalos abra Wishwave.
- El botón copie exactamente el alias `0972493848`.
- La validación evite confirmar por WhatsApp sin un nombre.
- El enlace de WhatsApp abra el chat de `+595972493848` con un mensaje que incluya el nombre.
- La página sea utilizable desde un teléfono y también se adapte a escritorio.
- La landing pueda ejecutarse localmente y se publique en hosting gratuito.
- No existan costos ni servicios de pago asociados.

## 9. Plan de etapas

Cada etapa finalizada debe marcarse como **Done**. No debe repetirse salvo que cambien sus requisitos o se detecte un error en su resultado.

1. **[Done]** Releer y reescribir los requisitos con instrucciones claras, precisas y verificables.
2. **[Done]** Evaluar opciones de stack tecnológico y hosting gratuito; documentar las decisiones en `README.md` y crear `.gitignore`.
3. **[Done]** Registrar en `prompts/implementation-plan.md` el plan detallado de implementación por fases.
4. **[Done]** Crear la base del proyecto y construir el MVP de la landing.
5. **[Done]** Levantar y probar la landing en el entorno local.
6. **[Done]** Realizar iteraciones y aplicar los cambios solicitados hasta aprobar la implementación.
7. **[Done]** Publicar la versión final en Netlify y completar el enlace de la plantilla de invitación.