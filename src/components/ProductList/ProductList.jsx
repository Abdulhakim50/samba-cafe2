import React from 'react'
import { Products } from '../../../data/data'
import { useState, useEffect } from 'react'
import './style.css'


const ProductList = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);


  const ProductSkeleton = () => (


    <a href="/" className='flex flex-col  rounded-md bg-white  fade-container shadow-md'>
      <div className='flex flex-col shadow-md rounded-md image-container'>
        <div className='flex flex-col'>
          <div className='image-container flex flex-col'>
            <div className='skeleton-image h-52 max-sm:h-40 bg-gray-300 fade'></div>
            <div className='skeleton-image overlay-image h-52 bg-gray-400 fade'></div>
          </div>
        </div>
      </div>
      <div className='ml-0 text-gray-600 flex flex-col gap-3 max-sm:gap-1'>
        <div className=''>
          <div className=' rounded-md w-[150px] h-[20px] bg-gray-300 mt-2 mb-3 fade'>

          </div>
          <div className=' rounded-md w-[155px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>

          </div>
          <div className=' rounded-md w-[160px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>

          </div>
          <div className=' rounded-md w-[170px] h-[15px] bg-gray-300 mt-2 mb-3 fade'>

          </div>
        </div>


      </div>
    </a>

  );


  useEffect(() => {

    const fetchData = () => {
      setTimeout(() => {


        setProducts(Products);
        setIsLoading(false);
      }, 4000);
    };

    fetchData();
  }, []);

  return (

    <>

      <div className='headingcontainer'>
        <p className='Poppins' > Total Branches</p>
        <hr  />
      </div>
      <div className='productcontainer'>


        {
          isLoading ? (

            Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (

            products.map((product) => (

              <a href="/info">
                <div className='product-container  ' >
                  <div className='image-container'>
                    <div className='flex flex-col'>
                      <div className='image-container2 '>
                        <img
                          src={product.src1}
                          alt=""
                        className=' hover:scale-110 duration-1000'
                        />
                    
                      </div>
                    </div>
                  </div>
                  <div className='product-info'>

                    <div className=''>
                      <p className='Poppins product-name'>{product.name}</p>
                      <hr />
                    </div>
                    <p className='Poppins product-license' >Lisans:<span className=' Poppins '>{product.Lisans}</span></p>
                    <p className='Poppins product-expiry'>Bitis tarihi:{product.Bitistarihi}</p>
                    <p className=' product-desc Poppins '>{product.desc}</p>
                  </div>
                </div>
              </a>

            )))}

      </div>

    </>
  )
}

export default ProductList