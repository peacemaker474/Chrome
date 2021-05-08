const weather = document.querySelector(".js-weather");

const API_KEY = '63779cc16d9588bb1d94978188e3e93c';
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then((response) => {return response.json();})
    .then(function(json) {
        const temperature = json.main.temp;
        const myLocation = json.name;
        weather.innerHTML = `${Math.floor(temperature)}° @ ${myLocation}` 
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords () {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();