var API_KEY = "4e1300c98d61fa3488f13483232666dd";
var language = "ro";

function getCurrentWeatherDataUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}
