import React from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";

export default function ForecastSection({ weather , unit}) {
  return (
    <div className="mt-7 mb-6 px-6 py-7 flex flex-col w-full bg-white/60 rounded-2xl backdrop-blur-lg shadow-md md:h-199 h-100 ">
      <div className="flex w-full justify-between poppins-light mb-3 items-center">
        <p className="text-md">Forecast</p>
        <div className="bg-[#0d1928] text-white px-4 py-2 rounded-3xl poppins-regular">
          <button className="cursor-pointer">
            <div className="flex items-center gap-2">
              <p className="text-sm">See Monthly</p>
            </div>
          </button>
        </div>
      </div>

      <div className="md:overflow-y-scroll overflow-x-scroll scrollbar-thin flex h-full p-1 md:flex-col gap-3">
        {weather &&
          weather.forecast.list.map((value, index) => (
            <ForecastWeatherCard key={index} value={value} unit={unit}/>
          ))}
      </div>
    </div>
  );
}
