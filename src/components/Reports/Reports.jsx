import React from 'react'
import { tableInputs } from '../../../data/data';
import './style.css'

const Reports = ({setSelectedRow, isReportOpen, setisReportOpen}) => {

    const toggleDropdown = () => {
        setisReportOpen(!isReportOpen);
    
      };
      console.log('report',isReportOpen)
  return (
    <div className={``}  >




    <>
      <div className={`transition-all reportscontainer   `}>
        <button
          type="button"
          className=" reportsbutton"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Reports
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div>
        {isReportOpen && (

          <div
            className={`reportsoptionscont    `}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="reportswrapper" role="none">
              {
                tableInputs.map((row) => (
                  <div onClick={() => { setSelectedRow(row.id); setisReportOpen(!isReportOpen) }} className='reportoptions Poppins'>{row.Name}</div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </>

  </div>
  )
}

export default Reports