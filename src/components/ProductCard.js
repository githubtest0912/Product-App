import React, { useEffect, useState } from "react";

const FetchData = () => {
   
  const API_URL = "https://fakestoreapi.com/products";
  
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw Error("Did not received expected data");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  return <div>FetchData</div>;
};

export default FetchData;
