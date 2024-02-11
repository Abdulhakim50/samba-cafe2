 import React from 'react'
 import './style.css'
 
 const TypeMenu = ({isopen,setisopen,setisOpenSubMenu, selectedMenu,isOpenSubMenu,handleMouseOver, handleMouseOut,  handleDateMouseOut, handleDateMouseOver}) => {

  
   return (
    <>
    { isOpenSubMenu && !selectedMenu &&
    <div
                    className={`typemenucont  transition-all    ${isOpenSubMenu && 'max-sm:right-[-175px]   transition-all'}  ${isopen && 'hidden'}  `}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                 
                  >
                    <div className="typemenuwrapper" role="none">
                
                    <h1 className=' Poppins '>COMPARE</h1> 
                          <div
                            className={`  Poppins `}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={()=>setisopen(true)}
                          >
                           By Report
                          </div>
                          <div
                            className={`  Poppins `}
                            onMouseOver={handleDateMouseOut}
                            onMouseOut={handleDateMouseOver}
                            onClick={()=>setisopen(true)}
                          >
                         By Date
                          </div>
                   
  
                    </div>
                  </div>
    }
    </>
   )
 }
 
 export default TypeMenu