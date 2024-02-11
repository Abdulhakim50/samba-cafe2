import React from 'react'
import Calendar from 'react-calendar';
import { tableInputs } from '../../../data/data';

const Date = ({isDateHovered,selectedMenu,handleDateMouseOut, handleDateMouseOver, setSelectedDate, selectedDate,  setSelectedMenu,isOpenSubMenu}) => {
  
    
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 

  return (

  <>


   {isDateHovered && !selectedMenu && isOpenSubMenu &&
    <div    onMouseOver={handleDateMouseOut}
            onMouseOut={handleDateMouseOver}>
    
      
        <Calendar className='calendar-container' selected={selectedDate} onChange={handleDateChange}   onClickDay={()=>{setSelectedMenu(true); setSelectedMenu(tableInputs[0] ? tableInputs[0].id : null)}}/>
        
    </div>
    
    }
    </>
  )
}

export default Date