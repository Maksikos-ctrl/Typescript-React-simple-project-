//TODO хуки позволяют тебе использовать разный функционал react без классов с использованием state. Прямо в функции
//TODO Hooks - это функции JavaScript, но при их использовании необходимо следовать правилам. Также есть плагин линтера для автоматического применения этих правил:
//? Используй Hooks только на верхнем уровне. Не вызывай Hooks внутри циклов, условий или вложенных функций.
//? Используй Hooks только из функций React. Не вызывай Hooks из обычных функций JavaScript.
import {useEffect, useState} from 'react';
import {IProduct} from '../models';
import axios, {AxiosError} from 'axios';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]),
     [loading, setLoading] = useState(false),
     [error, setError] = useState('');




  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const resp = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10'); // генерик у нас тут, потому что подлучение результат мы кладём в масси
      setProducts(resp.data);
      setLoading(false);
    } catch(err: unknown) {
      const error = err as AxiosError;
      setLoading(false);
      setError(error.message);
    }
    
  };

  useEffect(() => { //TODO когда делаем загрузку
    fetchProducts();
  }, []);
  

  return { products, error, loading, addProduct }
}