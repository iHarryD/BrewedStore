const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#set-password");
const confirmPasswordInput = document.querySelector("#confirm-password");

function inputAnimation(element) {
  window.addEventListener("click", (e) => {
    if (element === document.activeElement) {
      e.target.parentElement.classList.add("is-active");
    } else {
      if (element.value) return;
      element.parentElement.classList.remove("is-active");
    }
  });
}

inputAnimation(firstNameInput);
inputAnimation(lastNameInput);
inputAnimation(emailInput);
inputAnimation(phoneInput);
inputAnimation(passwordInput);
inputAnimation(confirmPasswordInput);
