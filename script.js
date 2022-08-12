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
      temp = location.main.temp;
      console.log(location);
      document.querySelector(".temp").innerText = temp;
    })
    .catch((error) => console.log("error"));
}
