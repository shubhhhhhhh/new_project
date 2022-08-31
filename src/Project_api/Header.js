// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './css/Header.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar>
                    <Container className="Header">
                        <Link to="callapi" className='link_style' ><Navbar.Brand >CallApi</Navbar.Brand></Link>
                        <Link to="/" className='link_style' ><Navbar.Brand >home</Navbar.Brand></Link>
                        <Link to="/dashboard" className='link_style' ><Navbar.Brand >dashboard</Navbar.Brand></Link>
                        <Link to="/login" className='link_style' ><Navbar.Brand >login</Navbar.Brand></Link>
                        <Link to="/event" className='link_style' ><Navbar.Brand >event</Navbar.Brand></Link>
                    </Container>
                </Navbar>
            </>
        )
    }
}