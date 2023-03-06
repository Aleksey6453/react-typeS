// import { json } from 'node:stream/consumers'
import React, { useEffect, useState, useMemo } from 'react'

const random = () => {
    console.log('Operation')
    return Math.trunc(Math.random() * 100)
}

const TestHooks = () => {
    const[count, setCount] = useState(random())
    const plus = () => {setCount (prevcount => count + 1)}
    const minus = () => {setCount (prevcount => count - 1)}
    const [colored, setColored] = useState(false)
    const styles = {
        backgroundColor: colored ? 'lime' : '#14D888'
    }

    const stylesTitle = useMemo(() => ({
        color: colored ? '#65FFD4' : 'black'
    }), [colored])

  return (
    <div className='main_test'>
       <h1 style={stylesTitle}>{count}</h1>
       <button className='btn my_btn' onClick={plus}>+</button> 
       <button className='btn my_btn' onClick={minus}>-</button>
       <button style={styles} className='btn my_btn' onClick={() => {setColored (colored => !colored) }}>ColorChange</button>

       
    </div>
  )
}

export default TestHooks
