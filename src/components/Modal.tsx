import React from 'react'
import CreateForm from './CreateForm'

interface ModalProps {
  children: React.ReactNode
  title: string
}

const Modal = ({children, title} : ModalProps) => {
  return (
    <>
      <div className='modal-window'>
       
      </div>
      <div className='form'>
          <h2 style={{'marginBottom':'30px'}}>{ title }</h2>

          {children}
      </div>
      
       
    </>
   
  )
}

export default Modal
