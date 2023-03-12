import React from 'react'
import Product from '../components/Product'
import { useProducts } from '../hooks/productsList'
import Loader from '../components/Loader';
import ErrorMess from '../components/ErrorMess';
import Modal from '../components/Modal';
import CreateForm from '../components/CreateForm';
import { useContext, useState } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


const ProductsPage = () => {
    const {loading, products, error, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)
  
    const createHandler = (product:IProduct)=>{
      close()
      addProduct(product)
    }
   
    return (
        <div className='main_test'>
            {loading && <Loader />}
            {error && <ErrorMess error={error}/> }
            { modal && <Modal title='Create new product' onClose={close}>
              <CreateForm onCreate={createHandler} />
            </Modal>}
            <button className='btn add_modal' onClick={open}>new form</button>
            {products.map(product => <Product product={product} key={product.id} />)}
  
        </div>
    )
  
}

export default ProductsPage
