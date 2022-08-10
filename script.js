function click() {
  let city = document.querySelector(".inputValue").value;
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    { city } +
    "&appid=ea395fc5637d0b6cdcbda1eb26226234&units=imperial";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data = document.querySelector(".name").innertext;
    });
  // document.querySelector(".name") = url.name
}
