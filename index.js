document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const checkBtn = document.getElementById("checkButton");
  const form = document.getElementById("loginForm");
  //   const inputWrapper = document.getElementsByClassName("inputWrapper");
  //email focus
  email.addEventListener("focus", () => {
    console.log("focusing-email");
    email.classList.add("focus");
    // email.style.border = "#ffc632";
  });
  email.addEventListener("blur", () => {
    email.classList.remove("focus");
    // email.style.border = "grey";
  });

  //password focus
  password.addEventListener("focus", () => {
    password.classList.add("focus");
  });
  password.addEventListener("blur", () => {
    password.classList.remove("focus");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("formData", formData);
    const object = Object.fromEntries(formData);
    console.log("object", object);

    // const myEmail = email.value;
    // const myPass = password.value;
    // const myBtn = checkBtn.checked;

    // console.log("myEmail", myEmail);
    // console.log("myPass", myPass);
    // console.log("myBtn", myBtn);

    console.log("submit functionallity");

    //clearing the values
    email.value = "";
    password.value = "";
    checkBtn.checked = false;
  });
});
