import React, {useState} from 'react'
import { IProduct } from '../models'

interface TovarProps {
    product: IProduct
}

const Tovar = ({product}:TovarProps) => {

    const [details, setDetails] = useState(false)
 
    

  return (
    <div>
       <img src={product.image} alt={product.title} style={{width:100}} /> 
       <p>{product.title}</p>
       <span><b>{product.price} $ </b></span> 
       <button className='btn' onClick={()=> setDetails(prev => !prev)}>
            {details ? 'Not Show'  : 'Show More'}
               
        </button>
        {details && <div>
            <p>{product.description}</p>
        </div>}
        
      
    </div>
  )
}

export default Tovar



