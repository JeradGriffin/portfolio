import React from 'react';

export const Modal = ({ isVisible, onClose, children }, props) => {
  if ( !isVisible ) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }
  

  return (

    <div className="fixed h-full w-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center left-0 right-0 overflow-y-scroll" 
    id="wrapper" onClick={handleClose}>
        
        <div className=' max-[500px]:w-[300px] md:w-[500px] lg:w-[700px] flex flex-col'>
          <button className=' text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
          <div className=' bg-white p-2 rounded overflow-scroll'>
            {children}
          </div>
        </div>
    </div>

    
  )
}  
