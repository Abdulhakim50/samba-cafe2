import React from 'react'
import './DataTableF.css'

const DataTableF = ({isDarkMode,showTable, selectedData, isOpenPrice, activeAdisyon, tableData, selectedProduct, selectedActiveAdision ,isTabelSelected,selectedMenu}) => {
  return (
    <>




      <div className={`${showTable && 'max-lg:hidden'}`}>
        <div className="">
          <table className={`table-container-f   ${isOpenPrice && 'w-[90%]'} ${activeAdisyon || isOpenPrice ? 'mt-[110px]' : ''}  `}>
            <thead>
              <tr className='table-header-row    '>
                <th colSpan={isOpenPrice ? "2" : "3"}>
                  <h2 className=" Poppins   ">{(isOpenPrice && 'yemekler') || (activeAdisyon && 'sparisler') || ('Ozet Biligi')}</h2>
                </th>
              </tr>

            </thead>
            <tbody>
              {
                isOpenPrice &&
                selectedProduct.info.map((data, index) => (
                  <tr key={data.id} className={`table-header-row2 ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                    <td className=" ">
                      {data.name}
                    </td>
                    <td className="   Poppins">{data.price}</td>
                  </tr>
                ))}


              {!isOpenPrice && !activeAdisyon &&
                selectedData.OzetBiligi.map((data, index) => (
                  <tr key={data.id} className={`table-header-row3   ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                    <td className="   Poppins">{data.name}</td>
                    <td className="   Poppins">{data.number}</td>
                    <td className="   Poppins">{data.percentage}</td>
                  </tr>
                ))}


              {
                activeAdisyon && (
                  <>
                    <tr key={activeAdisyon.id} className={`table-header-row4 dark:bg-[#293B46] bg-white`}>
                      <td className="  Poppins">Yemeke</td>
                      <td className="  Poppins">Adet</td>
                      <td className="  Poppins">Fiyat</td>
                    </tr>
                    {selectedActiveAdision.info.map((data, index) => (
                      <tr key={data.id} className={`table-header-row4 dark:bg-[#293B46] ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                        <td className="  Poppins">{data.name}</td>
                        <td className="  Poppins">{data.number}</td>
                        <td className="  Poppins">{data.percentage}</td>
                      </tr>
                    ))}
                  </>
                )
              }




            </tbody>


          </table>
        </div>
      </div>


    </>
  )
}

export default DataTableF