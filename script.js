const renderWeather = async () => {
  const city = document.getElementById("input-id").value
  const apiKey = "02b90eb8f5c06d1a6edbb2bd88ec5aed"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
  const response = await fetch(url)
  const data = await response.json()
  const temp = Math.round(data.main.temp - 273.15)
  const iconCode = data.weather[0].icon; 
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  console.log(iconUrl)
  document.getElementById("renderHere").innerHTML = `
                                            <h1 class="text-center"> ${city}</h1>
                                            <h1 class="text-3xl text-center">${temp}°C</h1>
                                            <div class="flex justify-center"><img src="${iconUrl}" alt=""></div> 
                                            `
}
