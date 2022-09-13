import React, { useState, useEffect } from "react";

const Search = () => {
    const [product, setProduct] = useState([])
    const [query, setQuery] = useState('')
   // console.log(product.filter(f=>f.title.toLowerCase().includes('casual')))

    const fetchData = () => {
        const API_URL = "https://fakestoreapi.com/products";
        fetch(API_URL)
          .then((response) => {
            if (!response.ok) throw Error("Did not received expected data");
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setProduct(data);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
    

 
  return (
   
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={e=> setQuery(e.target.value)}
       
      ></input>
      <div className="row">
        {/* // search data by title */}
        {product.filter((f) =>f.title.toLowerCase().includes(query)).map((data) => {
         return(
            <div className="col-md-3 animated fadeIn" key={data.id}>
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img src={data.image} className="card-img-top" alt="" />
                </div>
                {/* // card title */}

                <h6 className="card-title">{data.title}</h6>

                <h6 className="card-title">{data.category}</h6>

                {/* rate with star */}

                <p className="lead fw-bolder">
                  {data.rating && data.rating.rate}
                  <i className="fa fa-star star-color"></i>
                </p>

                <h4 className="card-text">${data.price}</h4>
              </div>
            </div>
          </div>
    
         )  
    
        })}
       
      
    </div> 
    </div>
  );
};

export default Search;
