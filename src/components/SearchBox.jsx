import React, { useState } from "react";
import { getWeatherByCity } from "../services/WeatherService";

export default function SearchBox({setWeather}) {

  const [city, setCity] = useState('')

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleWeatherKeyDown = async (e)=> {

    if (e.key == 'Enter') {
      const data = await getWeatherByCity(city)

      if (!data) {
         alert("City not found or error occurred.");
         return;
      }

      setWeather(data); // Update weather in Navbar
      setCity(""); // Clear input
    

  }
}

  return (
    <div className="hover:scale-102 focus-within:scale-102 transition-all ease-in hidden md:visible md:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-md w-full max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-black/80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search Location"
        className=" bg-transparent outline-none border-none ml-3 text-black/90 placeholder-black/60 w-full"
        value={city}
        onChange={handleCityChange}
        onKeyDown={handleWeatherKeyDown}
      />
    </div>
  );
}
