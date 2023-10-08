function getForecastFor5Days(city) {
  const defaulForcastURL = getForecastEndpoint(city);
  fetch(defaulForcastURL)
    .then((response) => response.json())
    .then((data) => {
      debugger;
      let { list } = data;

      let forcastGroupedByDay = {};
      let forecastContainer = document.querySelector(".weather-forecast");
      forecastContainer.innerHTML = "";

      list.forEach((element) => {
        let { dt } = element;
        let day = getDayOfTheWeek(dt);

        if (forcastGroupedByDay[day]) {
          forcastGroupedByDay[day].push(element);
        } else {
          forcastGroupedByDay[day] = [element];
        }
      });

      for (day in forcastGroupedByDay) {
        forecastContainer.innerHTML += `<h3>${day}</h3>`;

        forcastGroupedByDay[day].forEach((element) => {
          let { main, weather, dt } = element;

          let currentTime = getTime(dt);

          let weatherIcon = getWeatherIcon(weather[0].icon);
          let temperature = Math.round(main.temp);
          let description = weather[0].description;
          let realFeel = Math.round(main.feels_like);

          forecastContainer.innerHTML += `<div class="forecast-day-container">
<div
  class="forecast d-flex justify-content-between align-items-center border rounded p-3"
>
  <div class="">${currentTime}</div>
  <img
    class="weather-icon"
    src="${weatherIcon}"
  />
  <b class="">${temperature}°C</b>
  <div class="">${description}</div>
  <div class="">Real feel: <b>${realFeel}°C</b></div>
</div>
</div>`;
        });
      }
    });
}
