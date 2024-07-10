const emailForm = document.getElementById("email");
const password = document.getElementById("password");


emailForm.addEventListener("click", () => {
    emailForm.classList.add("focus-email");
    password.classList.remove("focus-pass");
})

password.addEventListener("click", () => {
    emailForm.classList.remove("focus-email");
    password.classList.add("focus-pass");
})