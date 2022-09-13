import React from 'react';
import image from './image/img2.jpg'
import Product from './Products';

 
const Front = () => {
    return (
        <div className='hero'>
            <div className='card bg-light text-white border-0'>
               
                <img src={image} className='card-img' alt='Background'
                height='550px'/>
                <div className='card-img-overlay d-flex flux-column justify-content-center'>
                    <div className='container'>
                        <h5 className='card-title  text-end display-3 fw-bolder mb-0'>NEW COLLECTION</h5>
                       
                    </div>
                </div>

               
            </div>
            <Product />
        </div>
    );
}
 

 
export default Front;