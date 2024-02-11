import React from 'react'
import './style.css'


const ComparisionData = ({ isDarkMode, showTable,selectedMenu, selectedData, isOpen, isOpenPrice, selectedMenuData, activeAdisyon, selectedRow, isTabelSelected, selectedDate }) => {


   console.log('istableselected',isTabelSelected)
  return (

    <>
    <div className={`table-container   `}>
    <h2 className="     Poppins ">{selectedMenuData?.Name}</h2>
    <div className='menu-dates'>
      <p className='   Poppins '>{selectedMenuData?.date1}</p>
      <p className='   Poppins '>{selectedMenuData?.date1}</p>
    </div>
  </div>
    <div className='grid-container '>

    

      <div className={` ${!isTabelSelected &&  selectedMenu &&   'hidden'}  ${showTable && 'max-lg:hidden'} `}>
        <div className="">
          <table className='table    '>
            <thead>
              <tr className='tableheading  '>
                <th className={``} border-b colSpan="5">
                  <h2 className="   Poppins ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>



              {
                selectedMenuData &&
                selectedMenuData.OzetBiligi.map((data, index) => (
                  <tr key={data.id} className={`selectedmenu  transition-[2s]  ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                    <td className="  ">{data.name}</td>
                    <td className="  ">{data.number}</td>
                    <td className="  ">{data.percentage}</td>
                  </tr>
                ))

              }

            </tbody>
          </table>
        </div>
      </div>


      <div className={`  ${!isTabelSelected &&  selectedMenu && 'hidden'} ${!showTable && 'max-lg:hidden'}`} >
        <div className=" overflow-x-auto ">
          <table className={`tabletwo   `}>
            <thead>
              <tr className='tableheadingtwo'>
                <th colSpan="5">
                  <h2 className="    Poppins ">Ozet Biligi</h2>
                </th>
              </tr>

            </thead>
            <tbody>

              {
                !isOpenPrice && !activeAdisyon && (

                  <>

                    <tr className='selectedmenutwo '>
                      <th className={` ${isOpen && 'px-[0px]'}`}>Masa Musteri</th>
                      <th className="">AdsNosipSaysis</th>
                      <th className="">Durumu</th>
                      <th className="">Fiyat</th>
                      <th className="">Toplam</th>
                    </tr>


                    {selectedData.info.map((data,index) => (

                      <tr className={`selectedmenutwo ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' } `} >
                        <td className={`  ${isOpen && 'px-[0px]'}`} >{data.MasaMusteri}</td>
                        <td className="  ">{data.AdsNoipSaysis}</td>
                        <td className="  ">{data.Durumu}</td>
                        <td className=" ">{data.Fiyat}</td>
                        <td className="  ">{data.Toplam}</td>

                      </tr>


                    ))}
                  </>
                )}
            </tbody>
          </table>
        </div>
      </div>



    </div>
    </>
  )
}

export default ComparisionData