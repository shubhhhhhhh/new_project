import { useState } from "react";
import { Maincontext } from "./Context";

export default function GlobalContext({children}){
    const[idinfo,setIdinfo] = useState({name:"login"})

    function dd(info){
        setIdinfo({name:info})
    }

    const value = {
        id:idinfo,
        setid:dd
    }

    return(
        <>
         <Maincontext.Provider value={value}>
            {children}
         </Maincontext.Provider>
        </>
    )
} 