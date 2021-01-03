var sliderElements = [
    {
        "src" : "Images/doc.jpg"
    },
    {
        "src" : "Images/doc2.jpg"
    },
    {
        "src" : "Images/doc3.jpg"
    }
];

var slider = document.getElementById('slider');
var sliderImg = document.getElementById('sliderImg');
var imgControls = document.querySelector("#imgControls");
var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');

rightArrow.addEventListener('click', () => {
    clearInterval(loopSlider);
    changeSlide();
    loopSlider = setInterval(changeSlide,3000);
});

leftArrow.addEventListener('click', () => {
    clearInterval(loopSlider);
    if(index - 2 >= -2){
        index -=2 ;
    }
    if(index < -1){
        index = sliderElements.length-2;
    }
    console.log(index);
    changeSlide();
    loopSlider = setInterval(changeSlide,3000);
});

for(var i = 0 ; i< sliderElements.length ; i++){
    let actualIndex = i;
    var svg = document.createElement("svg");
    svg.innerHTML = `
        <svg  class="imgAnchor" width="50" height="50">
        <circle cx="25" cy="25" r="8" stroke="black" stroke-width="2"/>
        </svg>
    `;
    imgControls.appendChild(svg);
    svg.addEventListener('click', () => {
        clearInterval(loopSlider);
        index = actualIndex-1;
        changeSlide();
        loopSlider = setInterval(changeSlide,3000);
    });
}

var index = 0;
function changeSlide() {
    var image = document.getElementById('sliderImg').getElementsByTagName("img");
    image[0].className = "hide";
    setTimeout(function(){ 
        image[0].setAttribute('src', `${sliderElements[index].src}`);
       },401);

    setTimeout(function(){ 
        image[0].className = "show";
         }, 801);
         
    if(index === sliderElements.length-1) { index = 0;}
    else{index ++;}
}

var time = document.getElementById('time');
var date = new Date();
time.innerHTML = `${date.toString()}`; 
time.style.textAlign = "center";
var loopSlider = setInterval(changeSlide,3000); 