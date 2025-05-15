import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div>Registro</div>
      <nav>
        <ul>
          <li>
            <Link to="/auth/iniciar-sesion">Ya tienes una cuenta? Pincha aquí</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Register