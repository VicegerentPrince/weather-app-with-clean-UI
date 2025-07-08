import React from "react";

export default function SunMoonSummary() {
  return (
    <div className="mt-7 mb-6 px-6 py-6 flex flex-col bg-white/60 rounded-2xl backdrop-blur-lg shadow-md transition-all ease-in">
      <div className="flex w-full justify-between poppins-light text-sm mb-3">
        <p>Sun & Moon Summary</p>
      </div>

      <div className=" flex w-full px-4 py-4 gap-6">
        <i className={"ri-sun-line text-5xl text-black/80"}></i>
        <div className="flex flex-col gap-1 justify-center mt-0.5">
          <h1 className="poppins-regular text-sm text-black/80">Air Quality</h1>
          <h1 className="poppins-semibold text-lg">160</h1>
        </div>
      </div>

      <div className=" flex w-full px-4 py-4 gap-5">
        <i className={"ri-sun-line text-5xl text-black/80"}></i>
        <div className="flex flex-col gap-1 justify-center mt-0.5">
          <h1 className="poppins-regular text-sm text-black/80">Air Quality</h1>
          <h1 className="poppins-semibold text-lg">160</h1>
        </div>
      </div>
    </div>
  );
}
