import React, { Component, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { getAllEmployee, addEmployee } from "../../api/Api";
import '../Dashboard/dashboard.css'
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


export function DetailPop(props) {

    const [form, setForm] = useState({});
    let obj = {}

    function handleChange(event) {
        // obj =  { ...obj, [event.target.name]: event.target.value }
        // console.log(obj)

        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)

    }

    const addemployee = async () => {
        try {
            await addEmployee(
                JSON.parse(localStorage.getItem("customer-info")).token, form)
                .then(res => {
                    console.log(res.message)
                })
        }
        catch (error) {
            alert("error hua bhai")
        }
    }

    function handleSubmit() {

        addemployee()
        props.getallemployee()

    }

    function handleCancel() {
        props.addui()
    }

    return (
        <>
            <h1>{props.text}</h1>
            <Card border="secondary" style={{ width: '25rem' }} className="card addpop">
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
                            <Form.Control type="text" onChange={handleChange} name="salary" placeholder=" enter salary" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" onChange={handleChange} name="address" placeholder="enter address" />
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmit} className="login" style={{ width: '8rem' }} >
                            add
                        </Button>

                        <Button variant="primary" onClick={handleCancel} className="login" style={{ width: '8rem' }} >
                            cancel
                        </Button>

                    </Form>

                </Card.Body>
            </Card>
        </>
    )
}



export default function Dashboard(props) {

    const [data, setData] = useState([{ name: 'a', phone: 1 }, { name: 'r', phone: 3 }, { name: 'w', phone: 2 }])

    async function getallemployee() {

        try {
            await getAllEmployee(
                JSON.parse(localStorage.getItem("customer-info")).token)
                .then(res => {
                    console.log(res.data)
                    const [...resData] = res.data
                    setData([...data, ...resData])
                })
        }
        catch (error) {
            alert("error hua bhai")
        }
    }

    useEffect(() => {

        getallemployee()

    }, [])

    const [btn, setbtn] = useState(false);
    let cp = null;

    function addUI() {
        btn ? setbtn(false) : setbtn(true)
        console.log(btn)
    }

    if (btn == true)
        cp = <DetailPop addui={addUI} getallemployee={getallemployee} text="hi" />

    function deldata(event){
        let id = event.target.value
        console.log(id)
    }

    function update(event){
        let id = event.key
    }

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Employee Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Button variant="secondary" onClick={addUI}>Add Employee</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar>
                <Container>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v, i) => {
                                return ( 
                                        <tr key={i}>
                                            <td >{i}</td>
                                            <td>{v.name}</td>
                                            <td>{v.name}</td>
                                            <td>{v.phone}</td>
                                            <td><button  value={i} onClick={update}>+</button></td>
                                            <td><button  value={i} onClick={deldata}>-</button></td>
                                        </tr>                                                                                                                                                                                                                          
                                )
                            })}
                            {/* {[<tr><td>hello</td></tr>]}   array get processed itself within fragmentation and runs */}
                        </tbody>
                    </Table>
                </Container>
            </Navbar>

            {cp}
        </>
    )
}