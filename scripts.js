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
        }else{
            password_input.type = "password";
        }
    });




});