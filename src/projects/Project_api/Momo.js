import { useMemo, useState } from "react"

export default function Momo() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [s, setS] = useState(0);
    const num = useMemo(() => counterFun2(s), [s]);

    function counterFun() {
        setCount(count + 1)
    }

    function counterFun3() {
        setS(s + 1)
    }
    function counterFun2(num1) {
        console.log("loading")
        for (let i = 1; i < 1000000; i++) {
            num1 += 1;
        }
        return num1;
    }
    return (

        <>
            <div>{count}</div>
            <div>{s}</div>
            <h1>{num}</h1>
            <button onClick={counterFun}>Count</button>
            <button onClick={counterFun3}>Count3</button>
            <button onClick={counterFun2}>Counter2</button>
        </>
    )
}