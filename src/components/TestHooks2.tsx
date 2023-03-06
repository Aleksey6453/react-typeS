import React, {useState, useEffect} from 'react'

const TestHooks2 = () => {

   const [type, setType] = useState('users')
   const [data, setData] = useState([])
   const [pos, setPos] = useState({
    x:0, y:100
   })

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
   }, [type])

   useEffect(()=>{
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', event=>{
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    })
   }, [])

   const [testcol, setTestcol] = useState(false)
   const styless = {
    backgroundColor: testcol ? 'pink' : 'red'
   }
   const stylessT = {
    color: testcol ? 'lime' : 'black'
   }
   const test1 = () => {
    setType('posts')
   }
   const test2 =()=>{
    setTestcol(prev => !prev)
   }
  

  return (
    <div className='main_test'>
      <h1 style={stylessT}>Resourses: {type}</h1>

      <button onClick={()=>setType('users')} className='btn my_btn'>Users</button>
      <button onClick={()=>setType('todos')} className='btn my_btn'>Todos</button>
      <button style={styless} onClick={()=>{test2(); test1()}} className='btn my_btn'>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default TestHooks2
