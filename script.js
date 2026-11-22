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
