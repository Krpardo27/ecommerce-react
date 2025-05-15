import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-800">Login</div>
      <nav>
        <ul>
          <li>
            <Link to="/auth/registro">¿No tienes una cuenta? Pincha aquí</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Login;
