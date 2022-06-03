import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    let [isAuth,setIsAuth] = useState(false);
    let login = ()=>{
        setIsAuth(true);
    }
    let logout = ()=>{
        setIsAuth(false);
    }
    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}
