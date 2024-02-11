import React from 'react'
import Reports from '../Reports/Reports'
import { useState } from 'react'
import './style.css'




const ReportSelections = ({ isOpen, setIsOpen, isOpenSubMenu, setisOpenSubMenu, isOpenPrice, selectedMenu, setSelectedMenu, activeAdisyon,setSelectedRow, isReportOpen, setisReportOpen }) => {

    const [isSecondReportOpen, setisSecondReportOpen] = useState(false)
  return (
    <div className={`reportselectioncont ${!selectedMenu  && 'hidden'}  `}>
       <div>
     <Reports setSelectedRow={setSelectedRow} isReportOpen={isReportOpen} setisReportOpen={setisReportOpen}/>

       </div>
       <div>
      <Reports setSelectedRow={setSelectedMenu} isReportOpen={isSecondReportOpen} setisReportOpen={setisSecondReportOpen}/> 
       </div>
    </div>
  )
}

export default ReportSelections