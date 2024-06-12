const form = document.querySelector("form");

const fName = document.querySelector("input[name='firstNameInput']");

const lName = document.querySelector("input[name='lastNameInput']");

const email = document.querySelector("input[type='email'");

const massage = document.querySelector("textarea");

const queryTypeOptions = [
  document.getElementById("f-option"),
  document.getElementById("s-option"),
];

const accept = document.getElementById("accept");

const massageSent = document.querySelector(".massage-sent-box");

let inputs = [fName, lName, email, massage];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  if (fName.value.length < 2) {
    fName.style.borderColor = "var(--red)";

    let spanClass = fName.dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";
    isValid = false;
  }

  if (lName.value.length < 2) {
    lName.style.borderColor = "var(--red)";

    let spanClass = lName.dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";

    isValid = false;
  }
  if (email.value.length < 2) {
    email.style.borderColor = "var(--red)";

    let spanClass = email.dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";
    isValid = false;
  }

  if (massage.value.length < 5) {
    massage.style.borderColor = "var(--red)";

    let spanClass = massage.dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";
    isValid = false;
  }

  if (queryTypeOptions.every((e) => e.checked != true)) {
    let spanClass = document.querySelector(".options").dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";

    isValid = false;
  }

  if (accept.checked != true) {
    let spanClass = accept.dataset.error;

    let span = document.querySelector("." + spanClass);

    span.style.display = "block";
  }

  if (isValid) {
    massageSent.style.opacity = "1";
  }
});

massageSent.addEventListener("transitionend", () => {
  setTimeout(() => {
    massageSent.style.opacity = "0";
  }, 2000);
});
