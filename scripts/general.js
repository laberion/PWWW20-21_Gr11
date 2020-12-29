window.addEventListener('load' ,start,false);

function start (){
    var p = document.getElementById('login');

    if(window.sessionStorage.getItem('user')){
        p.innerHTML = `${window.sessionStorage.getItem('user')} | <span id="logout">Log Out</span> `;
        var logout = document.getElementById('logout');
        logout.style.cursor = 'pointer' ;
        logout.addEventListener('click', ()=>{
            window.sessionStorage.clear();
            alert("You have logged out");
            location.reload();
        });
    }
}