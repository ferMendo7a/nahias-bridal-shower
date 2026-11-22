# Evidencia local del contador

## Alcance

Estas pruebas se ejecutaron contra la landing local en `http://127.0.0.1:5506`, sin hacer deploys a Netlify.

El reloj se simula mediante Playwright para verificar tres estados deterministas sin esperar al día real del evento.

## Aclaración sobre los créditos de Netlify

Netlify Free incluye **300 créditos mensuales**. Los créditos representan un conjunto de recursos consumidos por:

- **Deploys de producción:** 15 créditos por deploy.
- **Ancho de banda:** 20 créditos por GB.
- **Peticiones web:** 2 créditos por cada 10.000 solicitudes.
- Compute y uso de funciones/IA, según consumo.

Por lo tanto, la alerta del 50% no significa únicamente visitas. La causa principal de esta migración fueron los deploys repetidos de producción: aproximadamente 10 deploys equivalen a 150 créditos, o 50% del límite Free.

Las visitas de esta landing representan un consumo mucho menor porque es un sitio estático pequeño. Aun así, cada futura publicación debe hacerse solo después de aprobar y validar los cambios localmente para no consumir créditos innecesarios.

Fuente consultada: https://www.netlify.com/pricing/

## Escenarios

### 1. Antes de las últimas 24 horas

- Fecha simulada: `2026-12-04T00:00:00Z`.
- “Falta poquito para el Tecito” está oculto.
- El contador continúa mostrando días, horas, minutos y segundos.
- No hay confeti.
- Evidencia: `01-before-24h.png` y `01-before-24h.webm`.

### 2. Dentro de las últimas 24 horas

- Fecha simulada: `2026-12-06T10:00:00-03:00`.
- Restan `00` días y `07` horas.
- “Falta poquito para el Tecito” está visible.
- No hay confeti.
- Evidencia: `02-within-24h.png` y `02-within-24h.webm`.

### 3. Evento iniciado

- Fecha simulada: `2026-12-07T00:00:00Z`.
- Los cuatro valores muestran `00`.
- “Falta poquito para el Tecito” está oculto.
- Se muestra: `¡Llegó el día! 🎉 El Tecito de casa ya comenzó 💕`.
- Se crean 36 piezas de confeti.
- Evidencia: `03-event-started.png` y `03-event-started.webm`.

## Validaciones comunes

- Fecha y hora reales del evento: `2026-12-06T17:00:00-03:00`.
- Equivalente UTC: `2026-12-06T20:00:00Z`.
- Orden de información: Fecha, Hora, Lugar y Reserva.
- La tarjeta Hora muestra solo `17:00 h`.
- `GMT-3` se conserva únicamente debajo del contador.
- Sin desbordamiento horizontal a un ancho móvil de 390px.

## Reporte automatizado

`results.json` contiene el estado observado en los tres escenarios y el resultado de las expectativas.

## Regenerar la evidencia

1. Levantar la landing local en el puerto 5506.
2. Instalar Playwright en una carpeta temporal externa al repositorio si no está disponible.
3. Ejecutar:

```powershell
$env:PLAYWRIGHT_MODULE="$env:TEMP\nahia-playwright\node_modules\playwright"
node evidence\countdown\capture.cjs
```

Este script no despliega a Netlify ni agrega dependencias al proyecto.
