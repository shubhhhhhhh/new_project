import { createContext, useState } from "react"
import Cfourth from "./Cfourth";
import Csecond from "./Csecond";
import Cthird from "./Cthird";
export const DataSet = createContext(null);
export default function Cfirst({children}){
    const [state,setState] = useState({name:'nishant'});
    function dd(param)
    {
setState({name:param});
    }
    const setValue = {
        loginInfo:state,
        myFun:dd
    }
    return(
        <>
        <DataSet.Provider value={setValue}>
            {children}
        </DataSet.Provider>
        </>
    )
}