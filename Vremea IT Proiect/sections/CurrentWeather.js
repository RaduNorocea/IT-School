function displayCurrentWeather(city) {
  let defaultCityWeatherUrl = getCurrentWeatherDataUrl(city);

  fetch(defaultCityWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      let { name, main, weather, wind, dt } = data;

      let currentDayOfTheWeek = getDayOfTheWeek(dt);
      let currentTime = getTime(dt);

      let weatherIcon = getWeatherIcon(weather[0].icon);
      let temperature = Math.round(main.temp);
      let realFeel = Math.round(main.feels_like);
      let description = weather[0].description;
      let windSpeedInKmPerHour = windToKmPerHour(wind.speed);
      let windSpeed = Math.round(windSpeedInKmPerHour);

      populateDataInDOM(
        currentDayOfTheWeek,
        currentTime,
        temperature,
        realFeel,
        windSpeed,
        description,
        weatherIcon,
        name
      );
    });

  function populateDataInDOM(
    currentDayOfTheWeek,
    currentTime,
    temperature,
    realFeel,
    windSpeed,
    description,
    weatherIcon,
    name
  ) {
    let cityElement = document.querySelector(".city");
    cityElement.innerText = name;

    let dayTimeContainerElement = document.querySelector(".day-time-container");
    dayTimeContainerElement.innerHTML = `<b>${currentDayOfTheWeek}</b>, ${currentTime}`;

    let temperatureElement = document.querySelector(".temperature");
    temperatureElement.innerText = `${temperature}°C`;

    let weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.attributes["src"].value = weatherIcon;

    let realFeelElement = document.querySelector(".real-feel");
    realFeelElement.innerText = `${realFeel}°C`;

    let descriptionElement = document.querySelector(".description");
    descriptionElement.innerText = `${description}`;

    let windElement = document.querySelector(".wind");
    windElement.innerText = `${windSpeed}km/h`;
  }
}
