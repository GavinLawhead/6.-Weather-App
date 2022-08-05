let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");

function click() {
  fetch(
    "https://api.openweathermap.org/data/3.0/weather?q=" +
      inputValue.value +
      "&appid={ea395fc5637d0b6cdcbda1eb26226234}"
  )
    .then((response) => response.json())
    .then(data + console.log(data))

    .catch((err) => alert("wrong city name"));
}
