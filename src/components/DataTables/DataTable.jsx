// DataTable.jsx
import React from 'react';
import DataTableF from './DataTableFirst/DataTableF';
import DataTableS from './DataTableSecond/DataTableS';
import './DataTables.css'

const DataTable = ({isDarkMode, selectedData, isOpen, isOpenPrice, selectedMenuData, activeAdisyon, selectedRow, tableData, selectedMenu, isOpenSubMenu, selectedActiveAdision, selectedProduct, isReportOpen, isTabelSelected, setisTabelSelected, selectedDate,showTable}) => {




  return (
    <div className={`flex-container ${selectedMenu ? 'mt-[0px] lg:ml-[0px] ' : isOpenSubMenu || isReportOpen ? 'max-lg:mt-[485px] lg:ml-[0px]' : isOpen ? 'max-lg:mt-[300px] lg:ml-[0px]' : ''}

    `}  >
      <div className={`table-containerr ${isOpenPrice || activeAdisyon ? 'hide' : ''}  `}>
        <h2 className={` Poppins  `} >{selectedData.Name}</h2>
        <div className='date-container'>
          <p className='  Poppins '>{selectedData.date1}</p>
          <p className='  Poppins '>{selectedData.date1}</p>
        </div>
      </div>

      <div className={`table-wrapper   ${isOpen ? 'isopen ' : 'not-isopen '} ${selectedDate && 'hide'} `}>


        <DataTableF isDarkMode={isDarkMode} showTable={showTable}  selectedMenu={selectedMenu} selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice} activeAdisyon={activeAdisyon} selectedRow={selectedRow} tableData={tableData} selectedActiveAdision={selectedActiveAdision} selectedProduct={selectedProduct} isTabelSelected={isTabelSelected} setisTabelSelected={setisTabelSelected} />
        <DataTableS isDarkMode={isDarkMode}  showTable={showTable} selectedMenu={selectedMenu} selectedData={selectedData} isOpen={isOpen} isOpenPrice={isOpenPrice} activeAdisyon={activeAdisyon} selectedRow={selectedRow} tableData={tableData} selectedActiveAdision={selectedActiveAdision} selectedProduct={selectedProduct} isTabelSelected={isTabelSelected} setisTabelSelected={setisTabelSelected} />



      </div>

    </div>
  );
};

export default DataTable;
