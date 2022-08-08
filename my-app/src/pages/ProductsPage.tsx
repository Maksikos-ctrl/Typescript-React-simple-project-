import React, {useContext} from 'react';
import {useProducts} from '../hooks/products';
import {Product} from '../components/Product';
import {Loader} from '../components/Loader';
import {Error} from '../components/Error';
import {Modal} from '../components/Modal';
import {CreateProduct} from '../components/CreateProduct';
import {IProduct} from '../models';
import {ModalContext} from '../context/ModalContext';




export function ProductPage() {

    const {loading, error, products, addProduct} = useProducts(),
    // [modal, setModal]  = useState(false),
    {modal, open: openModal, close: closeModal} = useContext(ModalContext),
    createHandler = (product: IProduct) => {
      closeModal();
      // setModal(false);
      addProduct(product);
    }

   // когда мы сюда передаем пустой массив это значит что это колбек визоветься только один раз когда react компонент уже готов к роботе
    return (
        <div className="container mx-auto max-w-2xl pt-5">
    
            {loading && <Loader/>}
            {error && < Error error={error}/>}
            { products.map(product => <Product product={product} key={product.id}/>) }
            
            {/* <Product product={products[0]} />
            <Product product={products[1]} /> */}
    
    
           {modal && <Modal title="Create new Good" onClosing={closeModal}>
                <CreateProduct onCreating={createHandler}/>
            </Modal> }
    
    
            <button className="fixed bottom-5 right-5 rounded-full bg-green-700 text-white text-2xl px-4 py-2" onClick={openModal}>+</button>
        </div>
      )  
}