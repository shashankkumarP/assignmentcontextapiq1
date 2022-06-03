import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    let [isAuth,setIsAuth] = useState(false);
    let toggleAuth = ()=>{
        if(isAuth) setIsAuth(false);
        else setIsAuth(true);
      
    }
    
    return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
}
