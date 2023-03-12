import Product from './components/Product';
import { useProducts } from './hooks/productsList';
import Loader from './components/Loader';
import ErrorMess from './components/ErrorMess';
import Modal from './components/Modal';
import CreateForm from './components/CreateForm';
import { useState } from 'react';
import { IProduct } from './models';


function App() {
  const {loading, products, error, addProduct} = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (product:IProduct)=>{
    setModal(false)
    addProduct(product)
  }
 
  return (
      <div className='main_test'>
          {loading && <Loader />}
          {error && <ErrorMess error={error}/> }
          { modal && <Modal title='Create new product'>
            <CreateForm onCreate={createHandler} />
          </Modal>}
          {products.map(product => <Product product={product} key={product.id} />)}

      </div>
  )

}

export default App;
