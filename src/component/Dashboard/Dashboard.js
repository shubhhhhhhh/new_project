import React, { Component, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { getAllEmployee } from "../../api/Api";

export default function Dashboard(props) {

    const [data, setData] = useState([{ name: 'a', phone: 1 }, { name: 'r', phone: 3 }, { name: 'w', phone: 2 }])

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

    return (
        <>
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