import { signup } from "../api/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./css/signup.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [form, setForm] = useState();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await signup(form)
        console.log(response)
        if (response.status == "success") {
            toast("signup succssfuylly");
            setTimeout(() => {
                navigate("/")
            }, 2000)

        }
        else {
            toast.error(response.message)
        }
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    
    return (
        <>

            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} /><br></br>
                <input type="email" name="email" onChange={handleChange} /><br></br>
                <input type="number" name="phone" onChange={handleChange} /><br></br>
                <input type="password" name="password" onChange={handleChange} /><br></br>
                <input type="submit" value="Signup Karo Na"></input>
            </form> */}

            <ToastContainer />

            <Card border="secondary" style={{ width: '25rem' }} className="card">
                <Card.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" onChange={handleChange} name="name" placeholder=" enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" onChange={handleChange} name="phone" placeholder="enter phone no." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" onChange={handleChange} name="password" placeholder=" enterPassword" />
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmit} className="login" style={{ width: '23rem' }} >
                            create account
                        </Button>

                    </Form>

                </Card.Body>
            </Card>

        </>
    )
}