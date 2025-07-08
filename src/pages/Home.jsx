import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import { getWeatherByLocation } from "../services/WeatherService";
import WeatherInfoCard from "../components/WeatherInfoCard";
import SunMoonSummary from "../components/SunMoonSummary";
import ForecastSection from "../components/ForecastSection";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let data = await getWeatherByLocation(lat, lon, unit);
        console.log(data);

        setWeather(data);
      });
    } else {
      alert("Geolocation disabled");
    }
  }, [unit]);

  return (
    <div>
    <Navbar weather={weather} setWeather={setWeather} />
    <div className="flex gap-6 flex-col md:flex-row p-8 pt-4 md:p-0">
      
      <div className="flex flex-col md:w-5/7">
        <CurrentWeatherCard
          weather={weather}
          setWeather={setWeather}
          unit={unit}
          setUnit={setUnit}
        />

        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          <WeatherInfoCard
            icon="ri-t-shirt-air-line"
            title="Air Quality"
            value={160}
          />
          <WeatherInfoCard
            icon="ri-windy-line"
            title="Wind"
            value={weather && Math.round(weather.current.wind.speed) + " m/s"}
          />
          <WeatherInfoCard
            icon="ri-water-percent-line"
            title="Humidity"
            value={weather && weather.current.main.humidity}
          />
        </div>
        <div className="mt-6 flex gap-6 flex-wrap md:flex-nowrap">
          <WeatherInfoCard
            icon="ri-eye-line"
            title="Visibility"
            value={weather && weather.current.visibility / 1000 + " km"}
          />
          <WeatherInfoCard
            icon="ri-tailwind-css-line"
            title="Pressure"
            value={weather && weather.current.main.pressure}
          />
          <WeatherInfoCard
            icon="ri-tailwind-css-fill"
            title="Pressure"
            value={weather && Math.round(weather.current.wind.deg) + "°"}
          />
        </div>
        <SunMoonSummary />
      </div>

      <div className="md:w-1/2">
        <ForecastSection  weather={weather} unit={unit}></ForecastSection>
      </div>
    </div>
    </div>
  );
}
