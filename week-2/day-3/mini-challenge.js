async function getWeather() {
 console.log("Fetching weather...");
 try {
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true");
  const data = await res.json();
  const weather = data.current_weather;
  console.log("Current Temp: " + weather.temperature + "°C");
  console.log("Wind Speed: " + weather.windspeed + " km/h");
 } catch (err) {
  console.log("Failed to fetch weather", err);
 }
}
getWeather();
