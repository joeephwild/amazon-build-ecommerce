import { useState } from "react";
import { StarIcon } from '@heroicons/react/solid'
import {  CurrencyEuroIcon } from '@heroicons/react/outline'


const MAX_RATE = 5;
const MIN_RATE = 1;


function Product({ id, title, price, description, category, image, rating}) {
    const[rate] =useState(
        Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE
    );
   const [hasPrime] = useState(Math.random() < 0.5)
    
  return  <div className="relative flex flex-col m-5 bg-white z-30 p-10">
  <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

  <img src={image} height={200} width={200} objectFit="contain" />

  <h4 className="my-3 font-bold">{title}</h4>

  <div className="flex">
      {Array(rate).fill().map((_, i)=>(
          <StarIcon className="h-6 text-yellow-500" />
          
      ))}
  </div>


  <p className="text-ss mt-2 my-2 line-clamp-2">{description}</p>

  <div className="mb-5 flex font-bold">
  < CurrencyEuroIcon className="h-5"/>
     <p>{price}</p>
  </div>    


  {hasPrime && (
      <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw"  className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
      </div>
  )} 

  <button className="mt-auto button">Add to Basket</button>

</div>;
}

export default Product;
