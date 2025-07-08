import React from "react";
import { ClipLoader } from "react-spinners";


export default function WeatherInfoCard({ icon, title, value }) {

    if (!value || !icon || !title)
    
      return (
      <div className="px-4 py-6 flex bg-white/60 rounded-2xl backdrop-blur-lg shadow-md w-1/3 gap-5 items-center justify-center ">
        <ClipLoader
        color={"#000000"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );

  return (
    <div className="px-4 py-6 flex bg-white/60 rounded-2xl backdrop-blur-lg shadow-md md:w-1/3 w-full gap-5 items-start hover:scale-101 transition-all ease-in">
      <i className={icon + " text-xl poppins-light text-black/90"} ></i>
      <div className="flex flex-col gap-1.5 justify-center mt-0.5">
        <h1 className="poppins-regular text-sm text-black/80" >{title}</h1>
        <h1 className="poppins-bold text-2xl">{value}</h1>
      </div>
    </div>
  );
}
