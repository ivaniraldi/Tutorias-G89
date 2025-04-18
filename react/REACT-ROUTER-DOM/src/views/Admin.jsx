import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function Admin() {
    const {user} = useContext(GlobalContext)
    console.log(user)
  return (
    <div>Ruta del administrador
        <h1>Hola {user.username}</h1>
        <p>Estas en el panel de administrador</p>
        <p>Tu rol es {user.role}</p>
    </div>
  )
}
