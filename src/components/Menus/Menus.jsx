import React from 'react'
import { tableInputs } from '../../../data/data';
import BranchOptions from '../BranchOptions/BranchOptions';
import SubMenu from '../SubMenu/SubMenu';
import Reports from '../Reports/Reports';
import './style.css'
import TypeMenu from '../TypeMenu/TypeMenu';
import Date from '../Date/Date';

const Menus = ({setIsmenuOpen,isMenuOpen,isopen,setisopen,  selectedRow,isDateHovered, setSelectedDate, selectedDate,setisOpenSubMenu,isHovered , isTabelSelected,setisTabelSelected, isOpen, setIsOpen, isOpenSubMenu,  isOpenPrice, selectedMenu, setSelectedMenu, activeAdisyon,setSelectedRow, isReportOpen, setisReportOpen ,handleMouseOver, handleMouseOut,  handleDateMouseOut, handleDateMouseOver}) => {


 
  return (
    <div className={` menuscontainer ${activeAdisyon || isOpenPrice ? 'hidden' : ''} `} >
     <Reports  setSelectedRow={setSelectedRow} isReportOpen={isReportOpen} setisReportOpen={setisReportOpen} />

      <div className='menuwrapper'>


        <div className='absolute top-10  right-[0px] '>
          <Date  
          isOpen={isOpen} data={tableInputs}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          isOpenSubMenu={isOpenSubMenu}
          setisOpenSubMenu={setisOpenSubMenu}
          setSelectedMenu={setSelectedMenu}
          selectedMenu={selectedMenu}
          setIsOpen={setIsOpen}
          isHovered={isHovered}
          handleDateMouseOver={handleDateMouseOver}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleDateMouseOut={handleDateMouseOut}
          isDateHovered={isDateHovered}
          />
        </div>
        <div className='submenu'>
          <SubMenu setIsmenuOpen={setIsmenuOpen} setisopen={setIsOpen} isHovered={isHovered} 
                setisTabelSelected={setisTabelSelected} isTabelSelected={isTabelSelected} isOpenSubMenu={isOpenSubMenu} selectedMenu={selectedMenu} data={tableInputs} setSelectedMenu={setSelectedMenu} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut}  handleDateMouseOut={handleDateMouseOut} handleDateMouseOver={handleDateMouseOver} />
        </div>
        <div className={``}>
          <BranchOptions isMenuOpen={isMenuOpen} setIsmenuOpen={setIsmenuOpen} setisopen={setisopen} isOpen={isOpen} setIsOpen={setIsOpen} setisOpenSubMenu={setisOpenSubMenu} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} isOpenSubMenu={isOpenSubMenu} />
        </div>
        <div className='max-lg:absolute max-lg:right-[0px] max-sm:right-[175px] '>
          <TypeMenu isopen={isopen} setisopen={setisopen} selectedMenu={selectedMenu} isOpenSubMenu ={isOpenSubMenu} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut}  handleDateMouseOut={handleDateMouseOut} handleDateMouseOver={handleDateMouseOver} setisOpenSubMenu={setisOpenSubMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Menus