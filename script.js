// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (!themeBtn) return;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "Light Mode";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    // Featured Event
    const featured = document.querySelector("#featuredEvent");
    if (featured) {
        const events = [
            "Hackathon 💻",
            "Music Concert 🎤",
            "Food Festival 🍕",
            "Dance Show 💃",
            "Startup Meetup 🤝"
        ];
        const randomIndex = Math.floor(Math.random() * events.length);
        featured.textContent = events[randomIndex];
    }

    // Explore Button Navigation
    const exploreBtn = document.querySelector("#exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            window.location.href = "events.html";
        });
    }

    // Registration Form Validation
    const regForm = document.querySelector("#regForm");
    if (regForm) {
        const nameInput = regForm.querySelector("input[type='text']");
        const emailInput = regForm.querySelector("input[type='email']");
        const numberInput = regForm.querySelector("input[type='number']");
        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const numberError = document.querySelector("#numberError");

        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            nameError.textContent = "";
            emailError.textContent = "";
            numberError.textContent = "";
            let isValid = true;

            const name = nameInput.value.trim();
            if (name.length < 3) {
                nameError.textContent = "Name must be at least 3 characters";
                isValid = false;
            }

            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Enter a valid email";
                isValid = false;
            }

            const phone = numberInput.value.trim();
            if (phone && phone.length < 10) {
                numberError.textContent = "Enter a valid 10-digit phone number";
                isValid = false;
            }

            if (!isValid) return;

            const selectedEvent = regForm.querySelector("select").value;
            const gender = regForm.querySelector("input[name='g']:checked")?.value || "";

            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, phone, event: selectedEvent, gender });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful!");
            regForm.reset();
        });
    }
});