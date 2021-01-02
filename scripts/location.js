var map = document.getElementById('map');
var lat;
var lng;

function getCoordinates() {
        navigator.geolocation.getCurrentPosition(showPosition,cannotShowPosition);
  }

function showPosition(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      map.innerHTML = `
        <img class="map" src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},16,5,60/800x600?access_token=pk.eyJ1IjoibGFiZXJpb24xIiwiYSI6ImNramZ1d3htbTh2YTgzMXFqamxvNnNlZWQifQ.XXrSddRHMNefDaNw-LHdRg" alt="map"/>
      ` ;
  }

function cannotShowPosition(message){
    map.style.marginLeft = "30px";
    map.innerHTML = message.message;
  }

  getCoordinates();