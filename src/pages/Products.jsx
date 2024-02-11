 import React from 'react'
import ProductsNav from '../components/ProductsNav/ProductsNav'
import ProductList from '../components/ProductList/ProductList'

 
 const Products = ({setLoggedIn}) => {


   return (
    <>
    <div
      
      />
     <div>
        <ProductsNav setLoggedIn={setLoggedIn}/>
        <ProductList />
     </div>
     </>
   )
 }
 
 export default Products