import React, {useState, useContext} from 'react';
import { useProducts } from './hooks/products';
import Test from './components/Test';
import TestHooks from './components/TestHooks';
import TestHooks2 from './components/TestHooks2';


function App() {
  const {loading, error, products} = useProducts()
 
  return (
      <div>
        <TestHooks />
        <TestHooks2 /> 
      </div>
  )
}

export default App;
