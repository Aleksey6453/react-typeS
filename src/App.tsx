import React from 'react';
import Product from './components/Product';
import {products} from './data/products'


function App() {
 
  return (
      <div className='main_test'>
          <h2>34</h2> 
          <Product product={products[0]} /> 
      </div>
  )

}

export default App;
