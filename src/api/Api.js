import { getToken } from "../constant/Constant"
import { ApiRoute } from "../routes/ApiRoutes"
import { API_URL } from "./Url"

export const signup = async (signup_data)=>{
    const postHeader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(signup_data)
    }
    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_signup}`,postHeader)
    return await response.json();
}

export const login = async (login_data)=>{
    const postHeader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,
        body:JSON.stringify(login_data)
    }
    const response = await fetch(`${API_URL.AUTH_URL}${ApiRoute.auth_login}`,postHeader)
    return await response.json();
}


export const getAllEmployee = async(token)=>
{
    const postheader = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.get_all_employee}`,postheader)

    return await response.json();
}   

export const  getSingleEmployee = async(token,id)=>
{
    const postheader = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.single_employee}/${id}`,postheader)

    return await response.json();
}

export const addEmployee =  async (token,add_data)=> {
    const postheader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
        ,
        body:JSON.stringify(add_data)
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.add_employee}`,postheader)

    return await response.json();
}

export const deleteEmployee =  async (token,id)=> {
    const postheader = {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.delete_employee}/${id}`,postheader)

    return await response.json();
}


export const updateEmployee =  async (token,data,id)=> {
    const postheader = {
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
        ,
        body:JSON.stringify(data)
    }
    const response = await fetch(`${API_URL.EMPLOYEE_URL}${ApiRoute.update_employee}/${id}`,postheader)

    return await response.json();
}
