/* =========================
   3D TILT EFFECT
========================= */
const card = document.querySelector(".login-container");

document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});


/* =========================
   HARDCODED LOGIN DETAILS
========================= */
const VALID_USERNAME = "Bindu";
const VALID_PASSWORD = "Bhavana";


/* =========================
   INPUTS & ELEMENTS
========================= */
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const messageCard = document.getElementById("messageCard");
const errorText = document.getElementById("errorText");


/* =========================
   ENABLE / DISABLE BUTTON
========================= */
function checkInputs() {
    submitBtn.disabled =
        username.value.trim() === "" ||
        password.value.trim() === "";
}

username.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);


/* =========================
   LOGIN VALIDATION
========================= */
submitBtn.addEventListener("click", () => {
    errorText.style.display = "none";

    if (
        username.value === VALID_USERNAME &&
        password.value === VALID_PASSWORD
    ) {
        // SUCCESS → SHOW MESSAGE CARD
        messageCard.classList.add("show");

        messageCard.animate(
            [
                { transform: "rotateY(0deg) scale(0.8)" },
                { transform: "rotateY(360deg) scale(1)" }
            ],
            {
                duration: 1000,
                easing: "ease-in-out"
            }
        );
    } else {
        // ERROR MESSAGE
        errorText.textContent = "❌ Invalid username or password";
        errorText.style.display = "block";
    }
});


/* =========================
   THEME SWITCHER
========================= */
const themes = [
    { background: "#1A1A2E", color: "#FFFFFF", primaryColor: "#0F3460" },
    { background: "#461220", color: "#FFFFFF", primaryColor: "#E94560" },
    { background: "#192A51", color: "#FFFFFF", primaryColor: "#967AA1" }
];

const setTheme = (theme) => {
    document.documentElement.style.setProperty("--background", theme.background);
    document.documentElement.style.setProperty("--color", theme.color);
    document.documentElement.style.setProperty("--primary-color", theme.primaryColor);
};

const themeContainer = document.querySelector(".theme-btn-container");

themes.forEach(theme => {
    const btn = document.createElement("div");
    btn.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 6px;
        cursor: pointer;
        background: ${theme.background};
    `;
    btn.onclick = () => setTheme(theme);
    themeContainer.appendChild(btn);
});