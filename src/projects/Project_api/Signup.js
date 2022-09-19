import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./css/signup.css";

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.inputs = { name: "", email: "", phone: "", password: "" }
        this.arr = []
    }

    handleInput(event) {
        this.inputs = { ...this.inputs, [event.target.name]: event.target.value }
        console.log(this.inputs)
    }

    async post(){
       try {
        const response = await fetch("https://node-api91.herokuapp.com/crud/employee",
        {
            method:'POST',
            headers:{
                "content-Type":"application/json",
                // "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEF1ZyAyNCAyMDIyIDE1OjQ0OjM2IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyX2lkIjoiNjMwNjQ3M2MxYjAzNTAyNjBlZGYyYWYxIiwibmFtZSI6IlNodWJodW0iLCJpYXQiOjE2NjEzNTU4NzYsImV4cCI6MTY2Mzk0Nzg3Nn0.x-_B-ueVyuEpBOcAbJ8IOcojevy9tj0pEj1GcrXCSiM"
            },
            body:JSON.stringify(this.arr)
        }
   )
       } 
       catch (error) {
        alert("errror hua bhai") 
       }
    }

    signup() {
        var count = 0
         this.arr.forEach((x) => {
            if (this.inputs.email == x.email)
                count+=1
        })
        if(count>0)
            return alert("email already exists")
        else this.arr.push(this.inputs)
        console.log(this.arr)

        this.post();

    }

    render() {
        return (
            <>
                <Card border="secondary" style={{ width: '25rem' }} className="card">
                    <Card.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" onChange={(event) => this.handleInput(event)} name="name" placeholder=" enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" onChange={(event) => this.handleInput(event)} name="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number" onChange={(event) => this.handleInput(event)} name="phone" placeholder="enter phone no." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" onChange={(event) => this.handleInput(event)} name="password" placeholder=" enterPassword" />
                            </Form.Group>

                            <Button variant="primary" onClick={() => this.signup()} className="login" style={{ width: '23rem' }} >
                                create account
                            </Button>

                        </Form>

                    </Card.Body>
                </Card>
            </>
        )
    }
}