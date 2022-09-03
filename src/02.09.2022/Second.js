import { useRef } from "react"
export default function Second()
{
const myRef = useRef(null);
    function handleSubmit(event)
    {
        event.preventDefault()
       console.log( myRef.current.value)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <p>Second Component</p>
        <input type="text" placeholder="Enter Name" ref={myRef}></input>
        <input type="submit" value="Submit Karo"></input>
        </form>
        </>
    )
}