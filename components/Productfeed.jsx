import React from 'react';
import Product from "./Product";


function ProductFeed({ product }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:-mt-52 mx-auto">
            {product.slice(0,4).map(({id, title, price, description, category, image})=>(
                <Product
                    key={id} 
                    id = {id} 
                    title = {title} 
                    price={price} 
                    description = {description} 
                    category={category}
                    image={image}
                />
            ))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
                
            <div className="md:col-span-2">
                {product.slice(4,5).map(({id, title, price, description, category, image})=>(
                    <Product
                        key={id} 
                        id = {id} 
                        title = {title} 
                        price={price} 
                        description = {description} 
                        category={category}
                        image={image}
                    />
                ))}
            </div>
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
           
            {product.slice(5, product.length-1).map(({id, title, price, description, category, image})=>(
                <Product
                    key={id} 
                    id = {id} 
                    title = {title} 
                    price={price} 
                    description = {description} 
                    category={category}
                    image={image}
                />
            ))}

        </div>
    )
}

export default ProductFeed