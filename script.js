const copyButton = document.querySelector('#copy-alias');
const aliasValue = document.querySelector('#alias-value').textContent.trim();
const copyStatus = document.querySelector('#copy-status');
const confirmationForm = document.querySelector('#confirmation-form');
const nameInput = document.querySelector('#guest-name');
const nameError = document.querySelector('#name-error');

async function copyAlias() {
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(aliasValue);
      copied = true;
    } catch (error) {
      copied = false;
    }
  }

  if (!copied) {
    const temporaryInput = document.createElement('textarea');
    temporaryInput.value = aliasValue;
    temporaryInput.setAttribute('readonly', '');
    temporaryInput.style.position = 'fixed';
    temporaryInput.style.top = '-1000px';
    temporaryInput.style.left = '-1000px';
    document.body.appendChild(temporaryInput);
    temporaryInput.focus();
    temporaryInput.select();
    temporaryInput.setSelectionRange(0, temporaryInput.value.length);

    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    temporaryInput.remove();
  }

  if (copied) {
    copyStatus.textContent = '¡Alias copiado!';
    copyButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4 4 10-10"/></svg><span>Copiado</span>';
  } else {
    copyStatus.textContent = 'No se pudo copiar automáticamente. Seleccioná 0972493848 y copiá manualmente.';
  }
}

copyButton.addEventListener('click', copyAlias);

confirmationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const guestName = nameInput.value.trim();

  if (!guestName) {
    nameError.textContent = 'Ingresá tu nombre para continuar.';
    nameInput.setAttribute('aria-invalid', 'true');
    nameInput.focus();
    return;
  }

  nameError.textContent = '';
  nameInput.removeAttribute('aria-invalid');

  const message = `Hola, soy ${guestName}. Confirmo mi asistencia al Tecito de casa. También voy a enviar mi comprobante de la transferencia.`;
  const whatsappUrl = `https://wa.me/595972493848?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

const countdown = document.querySelector('.countdown');
const eventDate = new Date(countdown.dataset.eventAt);
const countdownValues = {
  days: document.querySelector('#countdown-days'),
  hours: document.querySelector('#countdown-hours'),
  minutes: document.querySelector('#countdown-minutes'),
  seconds: document.querySelector('#countdown-seconds')
};
const countdownStatus = document.querySelector('#countdown-status');
const confettiContainer = document.querySelector('#countdown-confetti');
const countdownTitle = document.querySelector('#countdown-title');
const twentyFourHours = 24 * 60 * 60 * 1000;
let countdownTimer;
let celebrationStarted = false;

function padTime(value) {
  return String(value).padStart(2, '0');
}

function launchConfetti() {
  const colors = ['#dc9ba1', '#b97c7d', '#86604b', '#f1dfd0', '#5f8066'];

  for (let index = 0; index < 36; index += 1) {
    const piece = document.createElement('span');
    piece.style.setProperty('--x', `${Math.random() * 100}%`);
    piece.style.setProperty('--delay', `${Math.random() * 1.2}s`);
    piece.style.setProperty('--duration', `${2.5 + Math.random() * 2}s`);
    piece.style.setProperty('--color', colors[index % colors.length]);
    confettiContainer.appendChild(piece);
  }
}

function celebrateEvent() {
  if (celebrationStarted) return;

  celebrationStarted = true;
  clearInterval(countdownTimer);
  countdown.classList.add('countdown--complete');
  countdownTitle.hidden = true;
  countdownStatus.textContent = '¡Llegó el día! 🎉 El Tecito de casa ya comenzó 💕';
  launchConfetti();
}

function updateCountdown() {
  const remaining = eventDate.getTime() - Date.now();
  countdownTitle.hidden = remaining <= 0 || remaining > twentyFourHours;

  if (remaining <= 0) {
    Object.values(countdownValues).forEach((element) => {
      element.textContent = '00';
    });
    celebrateEvent();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownValues.days.textContent = padTime(days);
  countdownValues.hours.textContent = padTime(hours);
  countdownValues.minutes.textContent = padTime(minutes);
  countdownValues.seconds.textContent = padTime(seconds);
}

updateCountdown();
if (!celebrationStarted) {
  countdownTimer = setInterval(updateCountdown, 1000);
}
