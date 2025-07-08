import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Location from "./Location";
import DarkModeButton from "./DarkModeButton";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

export default function Navbar({ weather, setWeather }) {
  countries.registerLocale(enLocale);

  return (
    <div className="px-6 py-4 flex items-center md:bg-white/60 md:rounded-2xl md:backdrop-blur-lg md:shadow-md justify-between w-full">
      <div className="flex items-center gap-2">
        <i className="ri-showers-fill md:text-4xl text-blue-600"></i>
        <h1 className="text-[#005ab4] font-bold md:text-2xl poppins-medium">
          Weather
        </h1>
      </div>
      {weather && (
        <Location
          city={weather.current.name}
          country={countries.getName(weather.current.sys.country, "en")}
        ></Location>
      )}

      <DarkModeButton></DarkModeButton>
      <SearchBox setWeather={setWeather}></SearchBox>
    </div>
  );
}
