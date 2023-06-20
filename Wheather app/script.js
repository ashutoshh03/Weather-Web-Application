const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "014dda09d5msh6b3b5f80ea8adbap10649bjsnef292c4b56e0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          temp.innerHTML = response.temp
          feels_like.innerHTML = response.feels_like
          humidity.innerHTML = response.humidity
          max_temp.innerHTML = response.max_temp
          min_temp.innerHTML = response.min_temp
          sunrise.innerHTML = response.sunrise
          sunset.innerHTML = response.sunset
          wind_degrees.innerHTML = response.wind_degrees
          wind_speed.innerHTML = response.wind_speed
        })
        .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Bhopal")