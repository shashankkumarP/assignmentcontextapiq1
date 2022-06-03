import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Login } from './Login'
import { Logout } from './Logout'
export const Navbar = () => {
    let {isAuth,toggleAuth} = useContext(AuthContext);
    let handleclick = (e)=>{
        toggleAuth();
    }
  return (
    <div>Navbar
        <button onClick={handleclick}>{isAuth ? "Logout":"Login"}</button>
        <Login />
        <Logout />
    </div>
  )
}
