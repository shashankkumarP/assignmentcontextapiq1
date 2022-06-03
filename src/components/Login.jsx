import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
  let {isAuth} = useContext(AuthContext);
  if(isAuth){
    return (
        <div>hii you are loged-in</div>
      )
  }
}
