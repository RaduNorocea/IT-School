let currentCityTag = document.querySelector(".city-name");

let currentCity = localStorage.getItem("city");
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);

getForecastFor5Days(currentCity);
