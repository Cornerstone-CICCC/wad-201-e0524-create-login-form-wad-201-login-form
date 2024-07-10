const emailForm = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const loginButton = document.getElementById("login-but");

emailForm.addEventListener("click", () => {
    emailForm.classList.add("focus-email");
});

emailForm.addEventListener("blur", () => {
    emailForm.classList.remove("focus-email");
});

password.addEventListener("click", () => {
    password.classList.add("focus-pass");
});

password.addEventListener("blur", () => {
    password.classList.remove("focus-pass");
});

loginButton.addEventListener("click", () => {
    console.log('email:', emailForm.value);
    console.log('password:', password.value) 
    emailForm.value = '';
    password.value = '';
    if (checkbox.checked) {
        console.log('Remind me:', true);
        } else {
            console.log('Remind me:', false);
    }
});

