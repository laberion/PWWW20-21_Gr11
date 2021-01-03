window.addEventListener('load', start, false);

function start() {
    var button = document.getElementById("submit");
    button.addEventListener('click', register);
}

function register(event) {
    var terms = document.getElementById('termsOfConditions');
    event.preventDefault();

    if(!fieldChecker() || terms.checked === false){
        alert('Fill all the fields');
        return;
    }
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var confirmPassword = document.forms["signUpForm"]["passwordConfirm"].value;
    var phoneNumber = document.forms["signUpForm"]["phoneNumber"].value;
    var user = {
        'email': email,
        'password': password
    };
    if (validateEmail(email)) {
        if (!window.localStorage.getItem(email)) {
            if (validatePassword(password)) {
                if (validateConfirmPassword(password, confirmPassword)) {
                    if (validatePhone(phoneNumber)) {
                        signUp(user);
                        window.alert("You have successfuly registered");
                        var urlParts = window.location.href.split('/');
                        var url = window.location.href;
                        window.location.href = url.replace(urlParts[urlParts.length-1],"index.html");
                    } else {
                        window.alert("Please enter a valid phone number");
                    }
                } else {
                    window.alert("Passwords must match");
                }
            } else {
                window.alert("Password must start with a capital letter, containt a number and at least 8 characters");
            }
        } else {
            window.alert("This email address is in use.");
        }
    } else {
        window.alert("Please enter a valid email address");
    }
}

function fieldChecker(){
    let allAreFilled = true;
    document.getElementById("form").querySelectorAll("[required]").forEach(function (i) {
        if (!allAreFilled) return false;
        if (!i.value) allAreFilled = false;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("form").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
        }
    });
    if (!allAreFilled) {
        return false;
    }
    return true;
}

function signUp(user) {
    window.localStorage.setItem(user.email, user.password);
}

function validateEmail(email) {
    var reg = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    if (reg.test(email)) {
        return true;
    }
    return false;
}

function validatePassword(password) {
    var reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'g');

    if (reg.test(password)) {
        return true;
    }
    return false;
}

function validateConfirmPassword(password1, password2) {
    if (validatePassword(password1) && validatePassword(password2) && password1.localeCompare(password2) === 0) {
        return true;
    }
    return false;
}

function validatePhone(phoneNumber) {
    var reg = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
    if (reg.test(phoneNumber)) {
        return true;
    }
    return false;
}