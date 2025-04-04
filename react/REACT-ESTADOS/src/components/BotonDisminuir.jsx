import React from 'react'

export default function BotonDisminuir({disminuirCuenta}) {
  return (
    
    <button
    className="btn btn-warning mt-2 mb-2"
    onClick={disminuirCuenta}
  >
    Disminuir Cuenta
  </button>
  )
}
