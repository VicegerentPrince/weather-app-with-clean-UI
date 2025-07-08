import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function CurrentWeatherCard({
  weather,
  setWeather,
  unit,
  setUnit,
}) {
  if (!weather)
    return (
      <div className="mt-7 mb-6 px-6 md:py-26 flex flex-col bg-white/60 rounded-2xl backdrop-blur-lg shadow-md items-center">
        <ClipLoader
          color={"#000000"}
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  const [time, setTime] = useState("");
  const { current } = weather;
  const iconCode = current.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utc + current.timezone * 1000); // timezone in seconds

      const formatted = localTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(formatted);
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [current]);

  const handleChangeUnit = () => {
    setUnit(unit == "metric" ? "imperial" : "metric");
  };

  return (
    <div className="mt-7 mb-6 px-6 py-6 flex flex-col bg-white/60 rounded-2xl backdrop-blur-lg shadow-md">
      <div className="flex w-full justify-between poppins-light text-sm">
        <p>Current Weather</p>
        <button onClick={handleChangeUnit}>
          {unit == "metric" ? "Celcius" : "Farenhiet"}{" "}
          <i class="ri-toggle-fill"></i>
        </button>
      </div>
      <div className="my-3">
        <h1 className="text-l poppins-medium">{time}</h1>
      </div>

      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center md:w-7/20 w-full">
          <img
            className="drop-shadow-2xl shadow-gray-500"
            src={iconUrl}
            alt=""
          />
          <h1 className="text-6xl poppins-semibold">
            {Math.floor(current.main.temp)}{" "}
            <sup className="text-black/60 poppins-medium text-xl">
              {unit == "metric" ? "°C" : "°F"}
            </sup>
          </h1>
        </div>
        <div className="md:block flex gap-10 justify-center">
          <h1 className="text-sm text-black/60 poppins-regular">
            {current.weather[0].main}
          </h1>
          <h1 className="text-sm poppins-regular">
            Feels Like {Math.floor(current.main.feels_like)}°
          </h1>
        </div>
      </div>

      <h1 className="mt-3 capitalize text-l">
        There will Be mostly {current.weather[0].description}. The high will be{" "}
        {Math.ceil(current.main.temp_max)}°
      </h1>
    </div>
  );
}
