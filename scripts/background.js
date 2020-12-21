var body = document.getElementsByTagName('body');

function getCurrentTime(){
    var time = new Date();
    var hours = time.getHours()  ;
    var minutes = time.getMinutes() ;
    var seconds = time.getSeconds() ;
    return [(hours * 256) % 255 ,(minutes * 256) % 255, (seconds * 256) % 255 ];
}

function changeBackground(){
    var rgb = getCurrentTime();
    body[0].style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}
changeBackground();
setInterval(changeBackground , 1000);