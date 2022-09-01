import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export default function Dashboard(props) {
    const data = [{ name: 'a', phone: 1 }, { name: 'r', phone: 3 }, { name: 'w', phone: 2 }]

    
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
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((v) => {
                                <tr>
                                    <td>${v}</td>
                                    <td>${v.name}</td>
                                    <td>${v.name}</td>
                                    <td>${v.phone}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Container>
            </Navbar>
        </>
    )
}