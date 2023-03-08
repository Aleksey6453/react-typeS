import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {

  const [show, setShow] = useState(false)
  const [opasity, setOpasity] = useState(false)
    
  return (
    <div className='cart'>
      <h3>{product.title}</h3>
      <br />
      <img src={product.image} alt="img" className='img_test'/>
      <p>{product.category}</p>
      <h3><b>{product.price}</b></h3>
      <button className='btn' onClick={()=>setShow(prev=>!prev)}>{show ? "Hide" : "Show"}</button>
      {show && <p>{product.description}</p>}
      <p> Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span>  </p>
      
    </div>
  )
}

export default Product
