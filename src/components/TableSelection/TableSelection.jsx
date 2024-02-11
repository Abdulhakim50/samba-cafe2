import React from 'react'
import { useState } from 'react';
import './style.css'

const TableSelection = ({isMenuOpen,showTable,setShowTable}) => {
  const [isTableMenuOpen, setisTableMenuOpen] = useState(false)
    const toggleDropdown = () => {
      setisTableMenuOpen(!isTableMenuOpen);
    
      };
  return (
    <div className={`hidetable  ${isMenuOpen && 'max-lg:translate-y-[290px]'}`}  >




    <>
      <div className={`transition-all tableselectioncont    `}>
        <button
          type="button"
          className=" selectionbtn  "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
         Select Table
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"

          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div>
        {isTableMenuOpen && (

          <div
            className={`tableoptionscont dark:bg-[#293B46] dark:text-white  `}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="tableoptionswrapper" role="none">
         
                    
                  <div onClick={() => {setShowTable(false); setisTableMenuOpen(!isTableMenuOpen) }} className=' Poppins'>First Table</div>
                  <div onClick={() => { setShowTable(true);  setisTableMenuOpen(!isTableMenuOpen) }} className=' Poppins'>Second Table</div>
           
    
            </div>
          </div>
        )}
      </div>
    </>

  </div>
  )
}

export default TableSelection