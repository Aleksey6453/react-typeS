import Product from './components/Product';
import { useProducts } from './hooks/productsList';
import Loader from './components/Loader';
import ErrorMess from './components/ErrorMess';
import Modal from './components/Modal';
import CreateForm from './components/CreateForm';
import { useState } from 'react';


function App() {
  const {loading, products, error} = useProducts()
  const [modal, setModal] = useState(true)
 
  return (
      <div className='main_test'>
          {loading && <Loader />}
          {error && <ErrorMess error={error}/> }
          <Modal title='Create new product'>
            <CreateForm />
          </Modal>
          {products.map(product => <Product product={product} key={product.id} />)}

      </div>
  )

}

export default App;
