import React, { useState } from 'react'

export default function Formulario() {
    const [nombre, setNombre] = useState('')
    const [error, setError] = useState(false)
    //estado para la edad


    const handleChange = (e) =>{
        setNombre(e.target.value)
        console.log(nombre)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //verificar que la edad sea mayor de 18
        if(nombre === ''){
            setError(true)
            return
        }
        console.log("Formulario enviado")
        setError(false)
    }

  return (
    <div>
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => handleChange(e)} />
            {/*input para la edad*/}
            <button>Enviar</button>
            {error ? <p className='text-danger'>El nombre no puede estar vacio</p> : null}
        </form>
    </div>
  )
}
