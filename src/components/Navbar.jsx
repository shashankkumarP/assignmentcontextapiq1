import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Login } from './Login'
import { Logout } from './Logout'
export const Navbar = () => {
    let {isAuth,login,logout} = useContext(AuthContext);
    let handleclick = (e)=>{
        if(isAuth){
            logout();
        }
        else{
            login();
        }
    }
  return (
    <div>Navbar
        <button onClick={handleclick}>{isAuth ? "Logout":"Login"}</button>
        <Login />
        <Logout />
    </div>
  )
}
