$(document).ready(function() {
  $('#contactForm').submit(function(event) {
    event.preventDefault();

    var nameInput = $('#nameInput');
    var emailInput = $('#emailInput');
    var messageInput = $('#messageInput');

    if (nameInput.val().trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      nameInput.focus();
      return;
    }

    if (emailInput.val().trim() === '') {
      alert('Por favor, ingresa tu correo electrónico.');
      emailInput.focus();
      return;
    }

    if (messageInput.val().trim() === '') {
      alert('Por favor, escribe tu mensaje.');
      messageInput.focus();
      return;
    }

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    $('#contactForm')[0].reset();
  });
});