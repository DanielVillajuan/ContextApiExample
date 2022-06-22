import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

function PersonajeA() {

    const {user} = useContext(UserContext)

  return (
    <div>PersonajeA : {user}</div>
  )
}

export default PersonajeA