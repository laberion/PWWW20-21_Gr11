var button = document.getElementById("submit");
button.addEventListener('click', (event) => {
event.preventDefault();
var email = document.forms["signInForm"]["email"].value;
var password = document.forms["signInForm"]["password"].value;
if(email === "" || password === ""){
    window.alert("Please enter your email and password");
    return;
}
if(sessionStorage.length != 0){
    window.alert("Please sign out first");
    return;
}
if ( localStorage.getItem(email)){
    if(localStorage.getItem(email) === password){
        window.sessionStorage.setItem('user',email);
        window.alert("You have logged in");
        var urlParts = window.location.href.split('/');
        var url = window.location.href;
        window.location.href = url.replace(urlParts[urlParts.length-1],"index.html");
    }else{
        window.alert("Wrong password");
    }
}else{
    window.alert("This account does not exist");
}
});

function validateEmail(email) {
var reg = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
if (reg.test(email)) {
    return true;
}
return false;
}