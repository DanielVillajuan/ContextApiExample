import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

function PersonajeB() {
    const {user ,setUser} = useContext(UserContext)
  return (
    <div>PersonajeB {user}</div>
  )
}

export default PersonajeB