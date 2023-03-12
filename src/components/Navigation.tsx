import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <ul className='nav'>
            <li>
               <Link to = '/' className='link'>Products</Link>
            </li>
            <li>
                <Link to = '/about' className='link'>About</Link>
            </li>
            <li>
                <Link to = '/contacts' className='link'>Contacts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation
