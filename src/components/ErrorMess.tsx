import React from 'react'
// import { useProducts } from '../hooks/productsList';

interface ErrorMessProps {
    error: string
}

const ErrorMess = ({error}: ErrorMessProps) => {
    // const {error} = useProducts()
  return (
    <div>
       <p style= {{color: 'red', fontSize:'20px'}}>{ error }</p>
    </div>
  )
}

export default ErrorMess
