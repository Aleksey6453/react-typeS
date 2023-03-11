import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import ErrorMess from './ErrorMess'

const productData:  IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 24,
      count: 13
    }
}

const CreateForm = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler= async (event: React.FormEvent)=>{
    event.preventDefault()

    if(value.trim().length === 0){
      setError('Please enter valid title')
      return
    }

    productData.title = value
    const responce = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
  }
  // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(event.target.value)
  // }

  return (
    
      <form onSubmit={submitHandler}>
        <input 
            type="text" 
            placeholder='Enter product'
             value={value}
             onChange={(event)=>{setValue(event.target.value)}}
            //  onChange={changeHandler}
             />

        {error && <ErrorMess error={error} />}
        <button className='btn'>Submit</button>
      </form>
  
   
  )
}

export default CreateForm
