import React, {useState} from 'react'

const Test = () => {
    const [zalupa, setZalupa] = useState(0)
  return (
    <div>
      <h1>Product for fucking!</h1>
      <h1>{zalupa}</h1>
      <button onClick={() => setZalupa(zalupa + 1)}>Plus</button>
      <button onClick={() => setZalupa(prevZalupa=>prevZalupa - 1)}>Mines</button>
    </div>
  )
}

export default Test
