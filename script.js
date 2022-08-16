let temp = "";
function thisfunc() {
  const city = document.querySelector(".inputValue").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=ea395fc5637d0b6cdcbda1eb26226234&units=imperial"
  )
    .then((response) => response.json())
    .then((location) => {
      averagetemp = location.main.temp;
      hightemp = location.main.temp_max;
      lowtemp = location.main.temp_min;
      weatherdesc = location.weather[0].description;
      console.log(location);
      document.querySelector(".temp").innerText = averagetemp;
      document.querySelector(".hightemp").innerText = hightemp;
      document.querySelector(".lowtemp").innerText = lowtemp;
      document.querySelector(".desc").innerText = weatherdesc;
    })
    .catch((error) => console.log("error"));
}

// {
//   "coord":{"lon":-80.1937,"lat":25.7743},
//   "weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],
//   "base":"stations",
//   "main":{"temp":80.87,"feels_like":88.3,"temp_min":77.02,
//   "temp_max":84.99,"pressure":1014,"humidity":91},
//   "visibility":10000,
//   "wind":{"speed":0,"deg":0},
//   "clouds":{"all":20},
//   "dt":1660653184,
//   "sys":{"type":2,"id":2009435,"country":"US","sunrise":1660647261,"sunset":1660694161},
//   "timezone":-14400,
//   "id":4164138,
//   "name":"Miami",
//   "cod":200}
