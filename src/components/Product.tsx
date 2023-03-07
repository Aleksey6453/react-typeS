import React from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    
  return (
    <div>
      <h1>Product!</h1>
      {product.title}
      <img src="{product.image}" alt="img" className='img_test'/>
      <p>{product.title}</p>
    </div>
  )
}

export default Product
