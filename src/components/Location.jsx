import React,  {useState} from 'react'
import { ClipLoader } from "react-spinners";

export default function Location({city, country}) {

  // const [loading, setloading] = useState(true)

  if (!city) {
    return (
      <div className="flex items-center poppins-regular">
        <ClipLoader
        color={"#000000"}
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
    
  }

  return (
    <div className='flex items-center poppins-regular'>
      <i className="ri-map-pin-2-line md:text-2xl text-blue-500 mr-2"></i>
      <div className='flex'>
        <h1 className='md:text-sm text-xs'>{city}</h1>
        <h1 className='md:text-sm text-xs'>, {country}</h1>
      </div>
        
    </div>
  )
}
