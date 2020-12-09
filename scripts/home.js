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

for(var i = 0 ; i< sliderElements.length ; i++){
    var svg = document.createElement("svg");
    svg.innerHTML = `
        <svg  class="imgAnchor" width="50" height="50">
        <circle cx="25" cy="25" r="8" stroke="black" stroke-width="2"/>
        </svg>
    `;
    imgControls.appendChild(svg);
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
         
    console.log(index);
    if(index === sliderElements.length-1) { index = 0;}
    else{index ++;}
}

var loopSlider = setInterval(changeSlide,3000); 