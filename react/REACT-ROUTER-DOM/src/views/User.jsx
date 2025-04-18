import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {nombre} = useParams()
  return (
    <div>
        <h1>Hola {nombre}</h1>
    </div>
  )
}
