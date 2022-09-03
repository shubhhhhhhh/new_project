import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SetToken(login_data) {

    localStorage.setItem("customer-info", JSON.stringify(login_data))

}

export const getToken = () => {
    if (localStorage.getItem("customer-info")) {
        return JSON.parse(localStorage.getItem("customer-info")).token;
    }
    else return false
}

export const Auth = ({ children }) => {
    const navigate = useNavigate()

   useEffect(()=>{
    if(!getToken()){
        navigate("/")
    }
   },[])

    return(
        <>
        {children}
       </>
    )
       

}