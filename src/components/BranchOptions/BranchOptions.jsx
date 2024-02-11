import React from 'react'
import { branches } from '../../../data/data';
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from 'react';
import './styles.css'




const BranchOptions = ({isMenuOpen,setIsmenuOpen,setisopen,setSelectedDate, isOpen, setIsOpen, isOpenSubMenu, setisOpenSubMenu, setisOpenPrice, isOpenPrice, selectedMenu, setSelectedMenu, activeAdisyon,setisReportOpen }) => {
  const [selectedBranch, setSelectedBranch] = useState(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setisOpenSubMenu(false)
    setisopen(false)
   setIsmenuOpen(!isMenuOpen)
  
   
  };


  const handleBranchClick = (branchName) => {

 
      setisOpenSubMenu(true);
      setSelectedBranch(branchName);
   
 

  };
  console.log(isOpenSubMenu)
  return (
    <>

      <div className={`options-container   ${activeAdisyon ? 'hidden' : isOpenPrice && 'hidden'} `}  >


        {
          !selectedMenu ?
            <>
              <div className=' transition-all'>
                <button
                  type="button"
                  className=" compare-button "
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={toggleDropdown}
                >
                  Compare
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
                {isOpen && (

                  <div
                    className={`options-menu  transition-all    ${isOpenSubMenu && 'hid'} `}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="options-menuwrappr" role="none">
                      {
                        branches.map((branch) => (
                          <div
                            key={branch.name}
                            onClick={() => {handleBranchClick(branch.name)}}
                            className={`branch-item  Poppins ${isOpenSubMenu && selectedBranch === branch.name ? 'bg-[#E2E8F0]' : ''}  ${isOpenSubMenu  && 'max-lg:hidden'}`}
                          >
                            {branch.name}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )}
              </div>
            </>
            :
            <div onClick={() => { setSelectedMenu(!selectedMenu); setIsOpen(!isOpen); setisOpenSubMenu(!isOpenSubMenu); setSelectedDate(false); }} className={`delete  transition-all   ${(isOpenPrice || activeAdisyon) && 'hidden'} `} mt-9 ><TiDeleteOutline className=' delete-icon dark:text-white' /></div>
        }
      </div>
    </>
  )
}

export default BranchOptions 