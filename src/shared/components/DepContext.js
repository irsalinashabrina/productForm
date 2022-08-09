import React, { createContext, useContext } from 'react'

const DepContext=createContext({});

export const useDeps=()=>{
    return useContext(DepContext)
}

export const DepsProvider=({children,services}) => {
  return (
    <DepContext.Provider value={services}>
        {children}
    </DepContext.Provider>
  )
}
