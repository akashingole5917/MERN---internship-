const apiKey = "4d79f59dceca72fc91b4228ce84c8da4";

function getWeather(){
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if(city === ""){
    resultDiv.innerHTML = "<p>Please enter city name</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Fetching data, please wait...</p>";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
 .then(res => {
    if(!res.ok){
      throw new Error("City not found");
    }
    return res.json();
  })
 .then(data => {
    const icon = data.weather[0].icon;
    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
      <p>Temp: ${data.main.temp} °C</p>
      <p>Condition: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} m/s</p>
      <p>Date: ${new Date().toLocaleDateString()}</p>
    `;

    // Optional - background change
    if(data.weather[0].main === "Rain"){
      document.body.style.background = "linear-gradient(135deg, #74ebd5, #ACB6E5)";
    } else if(data.weather[0].main === "Clear"){
      document.body.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
    } else if(data.weather[0].main === "Clouds"){
      document.body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    }
  })
 .catch(err => {
    resultDiv.innerHTML = `<p>Invalid city name. Try again.</p>`;
  });
                     }
