import React from 'react';
import Navbar from './Navbar';
import Front from './Front'
import Products from './Products';
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
 
const Main = () => {
    return (
        <div>
             <Navbar />
            <Routes>
                <Route path='/' element={<Front />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/products/:id' element={<Product />}/>

            </Routes>
         
        
        </div>
    );
}
 

 
export default Main;