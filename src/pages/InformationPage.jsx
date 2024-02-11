import React, { useState, useEffect } from 'react';
import NavTable from '../components/NavTable/NavTable';
import DataTable from '../components/DataTables/DataTable';
import { products, tableInputs } from '../../data/data';
import InfoNav from '../components/InfoNav/InfoNav';
import BranchOptions from '../components/BranchOptions/BranchOptions';
import BranchSubOptions from '../components/comparisionTable/ComparisionTable';
import SubMenu from '../components/SubMenu/SubMenu';
import ComparisionTable from '../components/comparisionTable/ComparisionTable';
import Menus from '../components/Menus/Menus';
// import { ThemeProvider } from '../contexts/them';
import { activeAdisyonData } from '../../data/data';
import TypeMenu from '../components/TypeMenu/TypeMenu';
import Date from '../components/Date/Date';
import ReportSelections from '../components/ReportSelections/ReportSelections';
import TableSelection from '../components/TableSelection/TableSelection';







const InformationPage = ({ setLoggedIn }) => {



  const url = 'liwapos.com:4681/samba.patron/Json/JsonReports?report=PTR-UnPaidTickets&startDate=null&endDate=null'

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setisOpenSubMenu] = useState(false)
  const [isOpenPrice, setisOpenPrice] = useState(false)
  const [selectedRow, setSelectedRow] = useState(tableInputs[0] ? tableInputs[0].id : null);
  const [selectedMenu, setSelectedMenu] = useState();
  const [activeAdisyon, setactiveAdisyon] = useState(false)
  const [isReportOpen, setisReportOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const [isDateHovered, setIsDateHovered] = useState(false);

  const [loading, setloading] = useState(false)
  const [slectedADRow, setslectedADRow] = useState(activeAdisyonData[0] ? activeAdisyonData[0].id : null)
  const [slectedProductRow, setslectedProductRow] = useState(products[0] ? products[0].id : null)

  const [themeMode, setthemeMode] = useState('light')
  const [tableData, settableData] = useState(null);
  const [error, setError] = useState(null);
  const [isTabelSelected, setisTabelSelected] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null);
  const initialDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
  const [showTable, setShowTable] = useState(false);
  const [isSecondReportOpen, setisSecondReportOpen] = useState(false)
  const [isopen, setisopen] = useState(false)
  const [isMenuOpen,setIsmenuOpen] =useState(false)



  // const darkTheme = () => {
  //   setthemeMode('dark')
  //   localStorage.setItem('themeMode', 'dark');
  // }

  // const lightTheme = () => {
  //   setthemeMode('light')
  //   localStorage.setItem('themeMode', 'light');
  // }



  // useEffect(() => {
  //   const storedThemeMode = localStorage.getItem('themeMode');
  //   if (storedThemeMode) {
  //     setthemeMode(storedThemeMode);
  //   } else {

  //     setthemeMode('light');
  //   }

  //   document.querySelector('html').classList.remove('dark', 'light');
  //   document.querySelector('html').classList.add(themeMode);
  // }, [themeMode]);

  const selectedMenuData = selectedMenu
    ? tableInputs.find((row) => row.id === selectedMenu)
    : null;



  const selectedActiveAdision = slectedADRow
    ? activeAdisyonData.find((row) => row.id === slectedADRow)
    : null;
  const selectedProduct = slectedProductRow
    ? products.find((row) => row.id === slectedProductRow)
    : null;
  const selectedData = selectedRow
    ? tableInputs.find((row) => row.id === selectedRow)
    : null;


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://liwapos.com:4681/samba.patron/Json/JsonListReports');
  //       console.log(response)
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const jsonData = await response.json();
  //       settableData(jsonData);

  //       console.log('Fetched Data:', jsonData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!tableData) {
  //   return <div>Loading...</div>;
  // }

  const handleMouseOver = () => {
    setIsHovered(true)
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleDateMouseOver = () => {
    setIsDateHovered(false)
  };

  const handleDateMouseOut = () => {
    setIsDateHovered(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);



  return (
    <>



      {/* 
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}> */}
      <div className={`  flex flex-col  items-start max-lg:gap-[50px]  test  h-[1200px] ${isDarkMode ? 'dark-mode' : 'light-mode'} ${selectedMenu && 'gap-'}`}  >

        <InfoNav isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} setactiveAdisyon={setactiveAdisyon} activeAdisyon={activeAdisyon} setLoggedIn={setLoggedIn} selectedData={selectedData} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className='flex flex-col  '>
          <ReportSelections isOpen={isOpen} setIsOpen={setIsOpen} isReportOpen={isReportOpen} setisReportOpen={setisReportOpen}
            isOpenSubMenu={isOpenSubMenu} setisOpenSubMenu={setisOpenSubMenu} isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
            selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} setSelectedRow={setSelectedRow} activeAdisyon={activeAdisyon} setisSecondReportOpen={setisSecondReportOpen} isSecondReportOpen={isSecondReportOpen} />


        </div>


        <div className={`  mx-[70px]  lg:mx-[150px] max-xl:mx-[150px] max-sm:mx-[30px] max-md:mx-[70px]  gap-[10px]  ${isOpen && 'mx-[80px] '}  `} >
          <div className={` realtive h-screen flex gap-[10px] max-lg:h-full  max-lg:flex-col flex-shrink-0 items-stretch ${selectedMenu && 'grid grid-cols-2 gap-5 items-center max-lg:grid-cols-1 '} ${selectedDate && 'gap-[110px] '}`} >
            <NavTable
              data={tableInputs}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              isOpen={isOpen} setIsOpen={setIsOpen}
              isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
              selectedData={selectedData}
              activeAdisyon={activeAdisyon}
              selectedActiveAdision={selectedActiveAdision}
              selectedProduct={selectedProduct}
              setslectedADRow={setslectedADRow}
              slectedProductRow={slectedProductRow}
              setslectedProductRow={setslectedProductRow}
              slectedADRow={slectedADRow}
              tableData={tableData}
              selectedMenu={selectedMenu}
              isDarkMode={isDarkMode}


            />
            <Menus isMenuOpen={isMenuOpen} setIsmenuOpen={setIsmenuOpen} isopen={isopen} setisopen={setisopen} isOpen={isOpen} setIsOpen={setIsOpen} isReportOpen={isReportOpen} setisReportOpen={setisReportOpen}
              isOpenSubMenu={isOpenSubMenu} setisOpenSubMenu={setisOpenSubMenu} isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice}
              selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} setSelectedRow={setSelectedRow} activeAdisyon={activeAdisyon} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} handleDateMouseOut={handleDateMouseOut} handleDateMouseOver={handleDateMouseOver} isHovered={isHovered}
              setisTabelSelected={setisTabelSelected} isTabelSelected={isTabelSelected}
              selectedRow={selectedRow}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              isDateHovered={isDateHovered}
            />

            <TableSelection isMenuOpen={isMenuOpen} isOpenSubMenu={isOpenSubMenu} isOpen={isOpen} showTable={showTable} setShowTable={setShowTable} isHovered={isHovered} />

            <DataTable isDarkMode={isDarkMode} isReportOpen={isReportOpen} selectedData={selectedData} isOpen={isOpen} setIsOpen={setIsOpen} isOpenPrice={isOpenPrice}
              selectedMenuData={selectedMenuData} selectedRow={selectedRow} isOpenSubMenu={isOpenSubMenu} selectedActiveAdision={selectedActiveAdision}
              selectedProduct={selectedProduct} activeAdisyon={activeAdisyon} selectedMenu={selectedMenu} isTabelSelected={isTabelSelected} selectedDate={selectedDate} showTable={showTable} />

            <ComparisionTable
              isDarkMode={isDarkMode}
              isOpenSubMenu={isOpenSubMenu}
              selectedMenu={selectedMenu}
              selectedData={selectedData}
              isOpen={isOpen} setIsOpen={setIsOpen} isOpenPrice={isOpenPrice} selectedMenuData={selectedMenuData}
              activeAdisyon={activeAdisyon} selectedRow={selectedRow}
              isTabelSelected={isTabelSelected}
              showTable={showTable}
              selectedDate={selectedDate}


            />
          </div>
        </div>

        <div className=' fixed right-[10rem]   mt-28 ml-[0px] flex max-lg:hidden max-[1314px]:right-[8rem] '>

          <div className='relative'>


            <div className='absolute right-[198px] top-[42px]' >
              <TypeMenu isHovered={isHovered} selectedMenu={selectedMenu} isOpenSubMenu={isOpenSubMenu} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} handleDateMouseOut={handleDateMouseOut} handleDateMouseOver={handleDateMouseOver}


              />
            </div>
            <div className='absolute right-[398px] top-[50px]' >
              <Date isOpen={isOpen} data={tableInputs}
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

            <div className='absolute right-[275px] top-[2px] ' >
              <SubMenu isOpen={isOpen} data={tableInputs}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
                isOpenSubMenu={isOpenSubMenu}
                setisOpenSubMenu={setisOpenSubMenu}
                setSelectedMenu={setSelectedMenu}
                selectedMenu={selectedMenu}
                setIsOpen={setIsOpen}
                isHovered={isHovered}
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                isTabelSelected={isTabelSelected}
                setisTabelSelected={setisTabelSelected}
                setIsHovered={setIsHovered}




              />
            </div>

            <div className=''>



              <BranchOptions  isopen={isopen} setisopen={setisopen} isOpen={isOpen} setIsOpen={setIsOpen} setisTabelSelected={setisTabelSelected}
                isOpenSubMenu={isOpenSubMenu} setisOpenSubMenu={setisOpenSubMenu}
                isOpenPrice={isOpenPrice} setisOpenPrice={setisOpenPrice} selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu} activeAdisyon={activeAdisyon} setisReportOpen={setisReportOpen} setSelectedDate={setSelectedDate} />
            </div>
          </div>
        </div>





      </div>
      {/* </ThemeProvider> */}
    </>
  );
};

export default InformationPage;
