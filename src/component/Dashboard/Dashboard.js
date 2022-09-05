import React, { Component, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { getAllEmployee } from "../../api/Api";

import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Dashboard(props) {

    const [data, setData] = useState([{ name: 'a', phone: 1 }, { name: 'r', phone: 3 }, { name: 'w', phone: 2 }])

    function updateUI() {

    }

    useEffect(() => {
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

        getallemployee()

    }, [])

    function addUI(){
        
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav>
                    <Button variant="secondary" onClick={addUI}>add employee</Button>
                    </Nav>
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
                                return <tr key={i}>
                                    <td >{i}</td>
                                    <td>{v.name}</td>
                                    <td>{v.name}</td>
                                    <td>{v.phone}</td>
                                    <button onClick={updateUI}>+</button>
                                </tr>
                            })}
                            {/* {[<tr><td>hello</td></tr>]}   array get processed itself within fragmentation and runs */}
                        </tbody>
                    </Table>
                </Container>
            </Navbar>

        </>
    )
}