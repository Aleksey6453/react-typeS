import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './components/Product';
// import {products} from './data/products'
import {IProduct} from './models'
import { AxiosError } from 'axios';


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try{
      setLoading(true)
      const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=5")
      setProducts(response.data)
      setLoading(false)
    } catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    } 
  }

  useEffect(()=>{
    fetchProducts()
  }, [])
 
  return (
      <div className='main_test'>
          {loading && <p>Loading...</p>}
          {error && <p style= {{color: 'red', fontSize:'50px'}}>{ error }</p>}
          {products.map(product => <Product product={product} key={product.id} />)}

      </div>
  )

}

export default App;
