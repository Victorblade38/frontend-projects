document.addEventListener("DOMContentLoaded", function () {
  let cookie = document.getElementById("cookies");

  // Check if cookies have already been accepted
  if (!localStorage.getItem("cookiesAccepted")) {
    cookie.classList.remove("hidden");
  }
});

document.getElementById("cancel-cookie").addEventListener("click", function () {
  let cookie = document.getElementById("cookies");
  cookie.classList.add("hidden");
});

document.getElementById("accept-cookie").addEventListener("click", function () {
  let cookie = document.getElementById("cookies");

  // Store cookie acceptance in local storage
  localStorage.setItem("cookiesAccepted", "true");

  alert("Cookies accepted");
  cookie.classList.add("hidden");
});
