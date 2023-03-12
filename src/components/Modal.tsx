import React from 'react'
import CreateForm from './CreateForm'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

const Modal = ({children, title, onClose} : ModalProps) => {
  return (
    <>
      <div className='modal-window' onClick={onClose}>
       
      </div>
      <div className='form'>
          <h2 style={{'marginBottom':'30px'}}>{ title }</h2>

          {children}
      </div>
      
       
    </>
   
  )
}

export default Modal
