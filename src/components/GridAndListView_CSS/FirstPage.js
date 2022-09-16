import React, { useState, useEffect } from "react";
import "./style1.css";

const FirstPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProduct(jsonData);
  };

  return(
    <div class="main">
  <ul class="cards">
    {product.map((data) => (
        <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src={data.image} alt=''/></div>
          <div class="card_content">
            <h2 class="card_title">{data.title}</h2>
            <p class="card_text">${data.price}</p>
            <p className="para">
                    {data.rating && data.rating.rate}
                    <i className="fa fa-star star-color"></i>
                  </p>

            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    ))}

  </ul>
  </div>
  )

   
};

export default FirstPage;
