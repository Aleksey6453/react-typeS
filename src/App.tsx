import React, { useEffect } from 'react';
import Product from './components/Product';
import {products} from './data/products'


function App() {

  async function fetchProducts() {
    
  }

  useEffect(()=>{
    console.log('effect')
  }, [])
 
  return (
      <div className='main_test'>

          {products.map(product => <Product product={product} key={product.id} />)}

      </div>
  )

}

export default App;
