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
      weatherdesc = location.weather.description;
      console.log(location);
      document.querySelector(".temp").innerText = averagetemp;
      document.querySelector(".hightemp").innerText = hightemp;
      document.querySelector(".lowtemp").innerText = lowtemp;
      document.querySelector(".desc").innerText = weatherdesc;
    })
    .catch((error) => console.log("error"));
}
