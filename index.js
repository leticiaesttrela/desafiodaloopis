function validarEmail(){
var email = document.querySelector(".email-bt");
var error = document.querySelector(".error-email");

  if (!email.checkValidity()) {
    showEmailErrors();
    return;
  }

  hideEmailErrors();
  email.submit();
}

function redefinirmsg() {
  email.classList.add(classFormIcon);
  emailInput.classList.add(classInputBorder);
  emailErrorMessage.classList.add(classErrorMessage);
}

function verificaEmail() {
  email.classList.remove(classFormIcon);
  emailInput.classList.remove(classInputBorder);
  emailErrorMessage.classList.remove(classErrorMessage);
