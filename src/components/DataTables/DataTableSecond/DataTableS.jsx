import React from 'react'
import './DataTableS.css'

const DataTableS = ({isDarkMode, showTable,selectedData, isOpen, isOpenPrice, activeAdisyon, tableData, selectedProduct, selectedActiveAdision,selectedMenu,isTabelSelected }) => {
    return (

        <>




<div  className={` datatable-container overflow-x-auto ${!showTable && 'max-lg:hidden'} `}>
  <div className="   ">
  <table className={`datatables     `}>
      <thead>
        <tr className='datatables-heading '>
          <th  colSpan="5">
            <h2 className="   Poppins  ">{ (isOpenPrice   && ' Adision  Etiknikleri')   ||( activeAdisyon && 'Adision  Etiknikleri' ) || ('Açık Adisyon Detaylar')}</h2>
          </th>
        </tr>
       
      </thead>
      <tbody>
      {
              isOpenPrice &&
                selectedProduct.info2.map((data,index) => (
                  <tr key={data.id} className={` table-row-1 ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                    <td className=" ">
                      {data.name}
                    </td>
                    <td className="   Poppins">{data.price}</td>
                  </tr>
                ))}
        {
        !isOpenPrice && !activeAdisyon && (

          <>
        
              <tr className=' table-row-2 '>
                <th className={`  ${isOpen && 'px-[0px]'} ${selectedMenu && ''}`}>Masa Musteri</th>
                <th className=" ">AdsNosipSaysis</th>
                <th className=" ">Durumu</th>
                <th className=" ">Fiyat</th>
                <th className=" ">Toplam</th>
              </tr>
          

       { selectedData.info.map((data)=>(
      
            <tr className= {`table-row-3 `} > 
            <td className= {`  ${isOpen && 'px-[0px]'} ${selectedMenu && ' lg:py-[24px]'}`} >{data.MasaMusteri}</td>
            <td className= {`  ${isOpen && 'px-[0px]'} ${selectedMenu && ''}`}>{data.AdsNoipSaysis}</td>
            <td className= {`  ${isOpen && 'px-[0px]'} ${selectedMenu && ''}`}>{data.Durumu}</td>
            <td className= {`  ${isOpen && 'px-[0px]'} ${selectedMenu && ''}`}>{data.Fiyat}</td>
            <td className= {`  ${isOpen && 'px-[0px]'} ${selectedMenu && ''}`}>{data.Toplam}</td>
      
       </tr>

    
        ))}
           </>
        )}
          { 
                 activeAdisyon && 
               selectedActiveAdision.info.map((data,index) => (
                <tr key={data.id} className={`table-row-4 ${index % 2 === 0 ? isDarkMode ? 'bg-[#293B46]' : 'bg-white': isDarkMode ? 'bg-[#293B46]':  'bg-[#FCFCFC]' }`}>
                <td className="   Poppins">{data.name}</td>
                <td className="   Poppins">{data.number}</td>
                <td className="   Poppins">{data.percentage}</td>
              </tr>
              ))
              
              }
      
      </tbody>
    </table>
  </div>
</div>
           
        </>
    )
}

export default DataTableS