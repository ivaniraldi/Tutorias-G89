import React from 'react'

export default function BotonIncrementar({incrementar}) {
  return (
    
    <button
    className="btn btn-primary mt-2 mb-2"
    onClick={incrementar}
  >
    Incrementar Cuenta
  </button>
  )
}
