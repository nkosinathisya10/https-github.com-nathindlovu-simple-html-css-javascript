// VALID LOGIN CREDENTIALS
const VALID_USERNAME = "User";
const VALID_PASSWORD = "1234";

// SECTION REFERENCES
const loginSection = document.getElementById("login-section");
const mainSection = document.getElementById("main-section");
const paymentSection = document.getElementById("payment-section");
const finalTicketSection = document.getElementById("final-ticket");

// LOGIN
document.getElementById("login-btn").addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
        loginSection.style.display = "none";
        mainSection.style.display = "block";
        document.getElementById("greeting").textContent = "Welcome " + user;
    } else {
        document.getElementById("login-error").style.display = "block";
    }
});

// BACKGROUND COLOR TOGGLE (FIXED)
let colorToggle = false;

document.getElementById("color-btn").addEventListener("click", function () {
    if (!colorToggle) {
        document.body.style.backgroundColor = "midnightblue";
    } else {
        document.body.style.backgroundColor = "darkslategray";
    }
    colorToggle = !colorToggle;
});

// TICKET DATA STORAGE
let ticketData = {};

// BUY TICKET
document.querySelectorAll(".buy-btn").forEach(function (button) {
    button.addEventListener("click", function () {

        const card = this.parentElement;

        ticketData = {
            match: card.querySelector("h3").textContent,
            date: card.querySelectorAll("p")[0].textContent,
            stadium: card.querySelectorAll("p")[1].textContent,
            price: card.querySelectorAll("p")[2].textContent
        };

        mainSection.style.display = "none";
        paymentSection.style.display = "block";

        document.getElementById("ticket-info").textContent =
            `${ticketData.match} | ${ticketData.date} | ${ticketData.stadium} | ${ticketData.price}`;
    });
});


// PAY BUTTON
document.getElementById("pay-btn").addEventListener("click", function () {
    paymentSection.style.display = "none";
    finalTicketSection.style.display = "block";

    document.getElementById("final-info").textContent =
        `${ticketData.match}
         | ${ticketData.date}
         | ${ticketData.stadium}
         | ${ticketData.price}`;
});

// BACK HOME (FIXED — NO LOGIN)
document.getElementById("back-home").addEventListener("click", function () {
    paymentSection.style.display = "none";
    mainSection.style.display = "block";
});

// RESTART
document.getElementById("restart").addEventListener("click", function () {
    finalTicketSection.style.display = "none";
    mainSection.style.display = "block";
});