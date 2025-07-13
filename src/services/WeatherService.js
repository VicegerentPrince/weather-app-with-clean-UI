
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



export async function getWeatherByLocation(lat, lon, unit) {
        const [current, forecast] = await 
            Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
        ),
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
        )
    ])

    const currentData = await current.json();
    const forecastData = await forecast.json();

    console.log(currentData)
    return {
        current: currentData, forecast: forecastData
    };
}

export async function getWeatherByCity(city) {
    const [current, forecast] = await 
            Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ),
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
    ]) 

    if (!current.ok || !forecast.ok) {
    
        alert("Location Not Found")
      throw new Error("Location not found or API error");
    }



    const currentData = await current.json();
    const forecastData = await forecast.json();

    return {
        current: currentData, forecast: forecastData
    };
}
 
