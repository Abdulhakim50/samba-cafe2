import React from 'react'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
// import useTheme from '../../contexts/them';
import './style.css'

const InfoNav = ({ setisOpenPrice, setactiveAdisyon, setLoggedIn,toggleDarkMode, isDarkMode }) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const sign = '<'

  // const { themeMode, lightTheme, darkTheme } = useTheme()
  // const onChangeBtn = (e) => {
  //   const darkModeStatus = e.currentTarget.checked
  //   if (darkModeStatus) {
  //     darkTheme()
  //   } else {
  //     lightTheme()
  //   }
  // }



  return (
    <div className='infonavcontainer   '>

      <div className='wrapper'>
        <div className='leftnav'>
          <h3 className=' '>{sign}</h3>
          <div >
            <a href="/" className='   Poppins'>back</a>
            <h1 className={`  Poppins ${isDarkMode ? 'text-[#64758B]':'text-[#64758B]' }`} >Liwa<span className={` font-semibold  Poppins ${isDarkMode ? 'text-white':'text-[#334155]'}`}>Soft</span> </h1>
          </div>
        </div>
        <div className='rightnav  '>
          <div className=' hiderightnav  '>
            <div onClick={() => { setisOpenPrice(true); setactiveAdisyon(false) }} className='Poppins'>Product Price</div>
            <div onClick={() => { setactiveAdisyon(true); setisOpenPrice(false) }} className='Poppins'>Active Adisyon</div>

            <div onClick={() => setLoggedIn(false)} className='Poppins'>Logout</div>
          </div>



          <label className="lable">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={toggleDarkMode}
              checked={isDarkMode}
             
            />
            <div className="w-11 h-6 outline-dotted bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span >{ isDarkMode ? 'Dark' : 'Light'}</span>
          </label>
        </div>
        <div className="dropdown-menu sm:hidden dark:text-white">
          <div className="menu-icon" onClick={toggleDropdown}>
            <IoMdMenu size={30} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content dropdown ">

              <div onClick={() => { setisOpenPrice(true); setactiveAdisyon(false) }} className='Poppins'>Product Price</div>
              <div onClick={() => { setactiveAdisyon(true); setisOpenPrice(false); }} className='Poppins'>Active Adisyon</div>

              <div onClick={() => setLoggedIn(false)} className='Poppins'>Logout</div>
            </div>
          )}
        </div>

      </div>
    </div>



  )
}

export default InfoNav