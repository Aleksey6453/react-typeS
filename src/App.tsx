import React from 'react';
import Product from './components/Product';
import {products} from './data/products'


function App() {
 
  return (
      <div className='main_test'>
          <Product product={products[1]} />
          <Product product={products[0]} /> 
      </div>
  )

}

export default App;
