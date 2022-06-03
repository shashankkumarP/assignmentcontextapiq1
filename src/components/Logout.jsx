import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Logout = () => {
  let {isAuth} = useContext(AuthContext);
  if(!isAuth){
      return (<div>Hii you are logout</div>)
  }
}
