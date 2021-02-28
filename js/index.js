const actionContainer = document.querySelector("#actionContainer");
const logoutButton = document.querySelector("#logoutButton");
const actionSpinner = document.querySelector("#actionSpinner");
const actionMessage = document.querySelector("#actionMessage");

const message = {
  logoutBefore: "Możesz się bezpiecznie wylogować.",
  logounInProgress: "Trwa bezpiecznie wylogowywanie.",
};

const logoutButtonContent = {
  logout: "Wyloguj",
  spinner: "<div class='tm-action__spinner'></div>",
};

logoutButton.addEventListener("click", logout);

setCopyrightYear();

function logout() {
  logoutButton.innerHTML = logoutButtonContent.spinner;
  actionMessage.innerHTML = message.logounInProgress;

  logoutCall();
}

function logoutCall() {
  setTimeout(() => {
    logoutButton.innerHTML = logoutButtonContent.logout;
    actionMessage.innerHTML = message.logoutBefore;
  }, 3000);
}

function setCopyrightYear() {
  const yearElement = document.querySelector("#year");
  yearElement.innerHTML = `${new Date().getFullYear()}`;
}