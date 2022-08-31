import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./css/login.css";
import { Container, Navbar } from "react-bootstrap";


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.inputs = { email: "", password: "" }
        this.arr = []
    }

    handleInput(event) {
        this.inputs = { ...this.inputs, [event.target.name]: event.target.value }
        console.log(this.inputs)
    }

    login() {
        this.arr.push(this.inputs)
        console.log(this.arr)
        this.get()
    }

    async get() {
        try {
            const response = await fetch("https://node-api91.herokuapp.com/crud/employee",
                {
                    method: 'Get',
                    headers: {
                        "content-Type": "application/json",
                        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEF1ZyAyNCAyMDIyIDE1OjQ0OjM2IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyX2lkIjoiNjMwNjQ3M2MxYjAzNTAyNjBlZGYyYWYxIiwibmFtZSI6IlNodWJodW0iLCJpYXQiOjE2NjEzNTU4NzYsImV4cCI6MTY2Mzk0Nzg3Nn0.x-_B-ueVyuEpBOcAbJ8IOcojevy9tj0pEj1GcrXCSiM"
                    },
                }
            )
            return response.json()
        }
        catch (error) {
            alert("errror hua bhai")
        }

    }

    componentDidMount() {
        this.get().then(response => {
            if (response.status == "success")
                this.arr.push(response.data)
        })
    }


    render() {
        return (
            <>
                <Container>
                    <Card border="secondary" style={{ width: '25rem' }} className="card">
                        <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" name="email" onChange={(event) => this.handleInput(event)} placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" name="password" onChange={(event) => this.handleInput(event)} placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" onClick={() => this.login()} className="login" style={{ width: '23rem' }}>
                                        Login
                                    </Button>

                                    <Link to={"forgot"} className="forgot">forgoton password?</Link>

                                    <div style={{ width: "23rem" }} className="br"></div>

                                    <Link to={"/signup"} ><Button variant="secondary" className="signup">signup</Button></Link>

                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Navbar>
                        <Container>
                            <Table striped="columns">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Navbar>

                </Container>

            </>
        )
    }
}