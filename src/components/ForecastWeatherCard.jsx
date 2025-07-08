import React from "react";

export default function ForecastWeatherCard({ value, unit }) {
  if (!value) {
    return (
      <div className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-md w-full h-1/8">
        Loading..
      </div>
    );
  }

  const date = new Date(value.dt * 1000);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const weekday = date.toLocaleString("default", { weekday: "short" });
  const formattedDate = `${day} ${month}, ${weekday}`;

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 md:rounded-full rounded-md md:px-6 md:py-6 md:pr-14 px-4 shadow-md md:w-full md:h-1/8 h-full flex items-center justify-between flex-col md:flex-row">
      <div className="flex md:items-center gap-6 md:flex-row flex-col">
        <div className="flex md:items-center drop-shadow-2xl gap-2 shadow-gray-500 flex-col md:flex-row">
          <img
            className="drop-shadow-2xl bg-blue-400 rounded-full"
            src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
            alt="weatherIcon"
          />
          <h1 className="md:text-2xl text-xl poppins-semibold">
            {Math.floor(value.main.temp)}{" "}
            <sup className="text-black/60 poppins-medium text-sm">
              {unit == "metric" ? "°C" : "°F"}
            </sup>
          </h1>
        </div>

        <div>
          <h1 className="text-sm text-black/60 poppins-regular">
            {value.weather[0].main}
          </h1>
          <h1 className="text-sm poppins-regular md:block hidden">
            Feels Like {Math.floor(value.main.feels_like)}°
          </h1>
        </div>
      </div>

      <div className="bg-black/40 h-8 w-[1px] absolute z-[-1] ml-66 hidden md:block"></div>

      <div className="justify-self-end">
        <h1 className="text-sm text-black/60 poppins-regular">
          {date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}
        </h1>
        <h1 className="text-sm poppins-regular">{formattedDate}</h1>
      </div>
    </div>
  );
}
