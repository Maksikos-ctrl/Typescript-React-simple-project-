import React, {useState} from 'react';
import {IProduct} from '../models';
import {Error} from './Error';
import axios from 'axios';

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreating: (product: IProduct) => void
}


export function CreateProduct({ onCreating }: CreateProductProps) {

    const [value, setValue] = useState(''),

        [error, setError] = useState(''),

        submitHandler =  async (e: React.FormEvent) => { // Типи храняться в React.ЧтоНадо 
            e.preventDefault();
            setError('');

            if (value.trim().length === 0) { // затримить "trim()" - удалить все пробели справа и слево
                setError('Please enter valid title');
                return;
            }

            productData.title = value;

            const resp = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

            onCreating(resp.data);
            
        },

        changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        };


    return ( 
       <form onSubmit={submitHandler}>
           <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter title of ur product" value={value} onChange={changeHandler}/>
            {error && <Error error={error}/>} 
           <button type="submit" className="py-2 px-4 border bg-blue-500 hover:text-white">Create</button>
       </form>
    )
}