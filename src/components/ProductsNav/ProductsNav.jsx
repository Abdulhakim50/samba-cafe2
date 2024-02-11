import React from 'react'
import { Navigate } from 'react-router-dom';
import './style.css'


const ProductsNav = ({setLoggedIn}) => {
  return (
    <div className='productnavcont'>
   <div className='productnavwrapper'>
   <h1 className=' Poppins'>Liwa<span className=' Poppins'>Soft</span></h1>
     <div onClick={()=>{setLoggedIn(false); <Navigate replace to={"/"}/>}} className='Poppins'>Logout</div>
     </div>
    </div>
  )
}

export default ProductsNav