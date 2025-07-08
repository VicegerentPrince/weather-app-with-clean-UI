import React, {useState, useEffect} from 'react'

export default function DarkModeButton() {

    const [isLight, setIsLight] = useState(true);

    const changeMode = () => {
        setIsLight(!isLight)
    }

  return (
    <div className='bg-[#0d1928] text-white px-4 py-2 rounded-3xl poppins-regular hidden md:flex'>
      <button
        onClick={changeMode}
        className='cursor-pointer'
      >
        {isLight? 
            (<div className='flex items-center gap-2'>
            <i className="ri-sun-line"></i>
            <p className='text-sm'>Light</p>
            </div>
            )
     : (<div className='flex items-center gap-2'>
            <i className="ri-moon-line"></i>
            <p className='text-sm'>Dark</p>
            </div>)}
      </button>
    </div>
  )
}
