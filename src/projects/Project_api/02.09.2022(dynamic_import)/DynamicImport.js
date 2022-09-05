// code splitting/dynamic import / lazy loading

import React, { Suspense, useState,lazy }  from "react"
// import First from "./First"
import Second from "./Second"
const First = lazy(() => import('./First'));
//import { sum } from "../Constant/My"

export default function DynamicImport()
{
    const [state,setState] = useState(0)
    import("../Constant/My").then(bh=>
       setState(bh.sum(10,20))
    )
    return(
        <>
        <Suspense fallback={"wait kar lo itna jaldi kya hai"}>
            <First />
        </Suspense>
            <h1>
                {
                state
                }
            </h1>
        <Second />
        </>
    )
}