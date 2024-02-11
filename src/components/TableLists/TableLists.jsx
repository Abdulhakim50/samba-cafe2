import React from 'react'
import { tableInputs } from '../../data/data'

const TableLists = () => {
  return (
    <div className=''>
   
    <table  className=' border mx-60  mt-20 ' >
    <thead>
        <tr>
         <th className='p-3'>Reports</th>
         </tr>
         </thead>
      
  
     <tbody className=' '> { tableInputs.map((tableInput)=>(
                <tr className=' 
                '> {tableInput.Name} </tr>
            ))
        }

   </tbody>
   </table>

   </div>
  )
}

export default TableLists