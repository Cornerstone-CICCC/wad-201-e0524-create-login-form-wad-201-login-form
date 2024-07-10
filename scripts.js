document.addEventListener('DOMContentLoaded', () => {
    

    var check_container = document.getElementById("remember_me_container");
    var check_input_hidden = document.getElementById("check_input_hidden");
    var check_checked = document.getElementById("check_checked");
    var check = document.getElementById("check");

    check_container.addEventListener('click', function(){
        if(check_checked.classList.contains("d-none")){
            check_checked.classList.remove("d-none");
            check_checked.classList.add("active");
            check.classList.add("d-none");
            check_input_hidden.value = 1;
        }else{
            check_checked.classList.add("d-none");
            check_checked.classList.remove("active");
            check.classList.remove("d-none");
            check_input_hidden.value = 0;
        }
    });


    var eye_icon_box = document.getElementById("eye_icon_box");
    var password_input = document.getElementById("password_input");

    eye_icon_box.addEventListener('click', function(){
        if(password_input.type === "password"){
            password_input.type = "text";
            eye_icon_box.style.backgroundImage = "";
            eye_icon_box.style.backgroundImage = "url('./images/eye-closed.svg')";
        }else{
            password_input.type = "password";
            eye_icon_box.style.backgroundImage = "";
            eye_icon_box.style.backgroundImage = "url('./images/eye.svg')";
        }
    });

    var form = document.getElementById("form");
    var send_button = document.getElementById("send_form_button");
    var loading_icon = document.getElementsByClassName('loading');
    var login_text = document.getElementById("login-text");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        send_button.setAttribute("disabled", true);

        for (let index = 0; index < loading_icon.length; index++) {
            const element = loading_icon[index];
            element.classList.remove("d-none");
        }
        login_text.classList.add("d-none");

        var email = document.getElementById("email");
        var password = document.getElementById("password_input");
        var remember_me = document.getElementById("check_input_hidden");

        var email_value = email.value.trim();
        var password_value = password.value;
        var remember_me_value = remember_me.value;

        var data = {
            "email": email_value,
            "password": password_value,
            "remember": remember_me_value,
        };

        console.log(data);

        
    });



});