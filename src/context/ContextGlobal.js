import { useState } from "react";
import { Maincontext } from "./Context";

export default function GlobalContext({children}){
    const[idinfo,setIdinfo] = useState

    const setvalue = {
        id:idinfo,
        setid:setIdinfo
    }

    return(
        <>
         <Maincontext.Provider value={setvalue}>
            {children}
         </Maincontext.Provider>
        </>
    )
} 