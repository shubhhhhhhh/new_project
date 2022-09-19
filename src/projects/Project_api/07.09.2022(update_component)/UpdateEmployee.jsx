import { useState,useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom"
import { updateEmployee,getSingleEmployee } from "../../api/Api"
const UpdateEmployee = ()=>{
    const param = useParams();
    const navigate = useNavigate()
    const [single,setSingle] = useState({});
    useEffect(()=>{
        getSingleEmployee(param.bharat_id).then((res)=>{
            console.log(res);
            if(res.status == "success"){
                    setSingle(res.data);
            }
        })
    },[param])

    function handleChange(event){
        setSingle({...single,[event.target.name]:event.target.value})
    }
    async function handleSubmit(event)
    {
        event.preventDefault();
        setSingle({...single,[event.target.name]:event.target.value})
        const id = single._id;
        delete single._id
        const res = await updateEmployee(id,single)
        if(res.status == "success")
        {
            navigate("/dashboard");
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={single.name} onChange={handleChange}></input>
                <input type="text" name="email" value={single.email} onChange={handleChange}></input>
                <input type="text" name="phone"  value={single.phone} onChange={handleChange}></input>
                <input type="text" name="address"  value={single.address} onChange={handleChange}></input>
                <input type="text" name="salary"  value={single.salary} onChange={handleChange}></input>
                <input type="submit" value="Update Karo Na"></input>
            </form>
        </>
    )
}
export default UpdateEmployee