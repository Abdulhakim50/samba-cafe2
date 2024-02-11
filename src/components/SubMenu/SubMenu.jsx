import React from 'react'
import classNames from 'classnames'
import './style.css'

const SubMenu = ( {setIsmenuOpen,setisopen,data, selectedRow, setSelectedMenu, selectedMenu,isOpenSubMenu, isHovered , handleMouseOver, handleMouseOut,isTabelSelected,setisTabelSelected}) => {

 
 
  

 
  return (
    <>

{ isHovered && !selectedMenu && isOpenSubMenu &&

(  <div className={`submenucont  ${isOpenSubMenu && 'max-sm:right-[-175px]   transition-all'} }`}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <h1 >REPORTS</h1> 
     {data.map((row) => (
       <div className={classNames('  menucont ', {
        'bg-[#F0F3FA]': selectedRow === row.id,
      })}>
          <div
            key={row.id}
            className='submenuwrapper'
            
          
            onClick={() => {setSelectedMenu(!selectedMenu);   setSelectedMenu(row.id); setisTabelSelected(true);setisopen(false);setIsmenuOpen(false)  } }
          >
            <div  dangerouslySetInnerHTML={{ __html: row.logo }}></div>
            <p className="   Poppins ">{row.Name}</p>
          </div>
          </div>
        ))}
     </div> )
     }
  </>
  )
}

export default SubMenu