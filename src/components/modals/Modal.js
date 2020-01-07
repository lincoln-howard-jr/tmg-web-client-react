import React, { useRef } from 'react'
import './modal.css'

function Modal({close, isOpen, Component, onDone, children}) {
  const backdrop = useRef ();
  const onClick = (e) => {
    if (e.target === backdrop.current) {
      close ();
    }
  }
  return (
    <div onClick={onClick} ref={backdrop} id="modal-backdrop" className={isOpen ? 'open' : 'closed'}>
      <div id="modal">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
