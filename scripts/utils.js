window.addEventListener('load', start, false);

function start(){
    var button = document.getElementById("submit");
    button.addEventListener('click', register);
}

function register(event){
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var confirmPassword = document.forms["signUpForm"]["passwordConfirm"].value;
    var phoneNumber = document.forms["signUpForm"]["phoneNumber"].value;
    if(validateEmail(email)){
        if(validatePassword(password)){
            if(validateConfirmPassword(password,confirmPassword)){
                if(validatePhone(phoneNumber)){
                    signUp(email,password)
                    window.alert("You have successfuly registered");
                    window.location.href = "index.html";
                }else{
                    window.alert("Please enter a valid phone number");
                }
            }else{
                window.alert("Passwords must match");
            }
        }else{
            window.alert("Password must start with a capital letter, containt a number and at least 8 characters");
        }
    }else{
        window.alert("Please enter a valid email address");
    }
    //event.preventDefault();
}

function signUp(email,password){

}

function validateEmail(email) {
    var reg = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    if (reg.test(email)) {
        return true;
    }
    return false;
}

function validatePassword(password) {
    var reg = new RegExp(/[A-Z][a-zA-Z0-9+_.-]+/,'g');
    if (reg.test(password) && password.length >= 8) {
        return true;
    }
    return false;
}

function validateConfirmPassword(password1, password2) {
    if(validatePassword(password1) && validatePassword(password2) && password1.length ===password2.length){
        return true;
    }
    return false;
}

function validatePhone(phoneNumber){
    var reg = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
    if(reg.test(phoneNumber)){
        return true;
    }
    return false;
}