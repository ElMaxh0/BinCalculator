import React, { createContext, useContext, useState } from "react";
export const NumberContext = createContext();
export default function NumberProvider({children}){
    const[Numberid, setNumberid]= useState(39);
    return <NumberContext.Provider value={{Numberid,setNumberid}}>{children}</NumberContext.Provider>
}
export function useNumber(){
    const context= useContext(NumberContext)
    const {Numberid, setNumberid} = context;
    return {Numberid, setNumberid}

}