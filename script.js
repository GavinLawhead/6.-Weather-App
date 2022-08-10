const city = document.querySelector(".inputValue");
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  { city } +
  "&appid=ea395fc5637d0b6cdcbda1eb26226234&units=imperial";

fetch(url)
  .then((response) => response.json())
  .then((location) => console.log(location))
  .catch((error) => console.log(error));

//  "https://api.openweathermap.org/data/2.5/weather?q=" +
//  { city } +
//  "&appid=ea395fc5637d0b6cdcbda1eb26226234&units=imperial";
