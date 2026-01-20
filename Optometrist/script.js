// LOGIN INTERACTION
document.getElementById("login-btn").onclick = function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "Nkosinathi" && pass === "12345") {
    document.getElementById("login-box").style.display = "none";

    document.getElementById("main-header").classList.remove("hidden");
    document.getElementById("services-section").classList.remove("hidden");
    document.getElementById("greeting").classList.remove("hidden");

    document.getElementById("greeting").innerText = "Welcome, " + user;
  } else {
    alert("Incorrect Username or Password");
  }
};

// THEME SWITCH INTERACTION
document.getElementById("theme-btn").onclick = function () {
  document.body.style.background =
    document.body.style.background === "white" ? "#0d1b2a" : "white";

  document.body.style.color =
    document.body.style.color === "black" ? "white" : "black";
};

// POPUP INTERACTION
const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popup-text").innerText =
      "You selected: " + card.querySelector("h3").innerText;
  });
});

// CLOSE POPUP
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// TIME GREETING INTERACTION
window.onload = function () {
  const hour = new Date().getHours();
  if (hour < 12) {
    document.getElementById("greeting").innerText = "Good Morning!";
  } else if (hour < 18) {
    document.getElementById("greeting").innerText = "Good Afternoon!";
  } else {
    document.getElementById("greeting").innerText = "Good Evening!";
  }
};
