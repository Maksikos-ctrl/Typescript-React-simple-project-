import React, {useState} from 'react';
import {IProduct} from '../models';

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false), // it means that we're crating tuple
        changeClassBtn = details ? 'bg-yellow-400' : 'bg-purple-400',
        btnArrs = ['py-2 px-4 border', changeClassBtn]; 

        
   //? name?.class?.subclass - we're checking here on undefined, if this statement equals to undefined, we won't display it, if don't, we won't display error in console
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button className={btnArrs.join(' ')} onClick={() => setDetails(prev => !prev)} >{details ? 'Hide details' : 'Show details'}</button>
           
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p> 
            </div>}
            {/* <p>{product.description}</p> */}
        </div>
    )
}

