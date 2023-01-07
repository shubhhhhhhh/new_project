import { useContext, useEffect } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { Maincontext } from "../context/Context";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    const { id,setid} = useContext(Maincontext)
    const navigate = useNavigate();

    function logout() {
        import ("./Constant").then(ff=>{ff.clearToken()})
        navigate('/')
        setid("login")
    }

    useEffect( ()=>{
        if(sessionStorage.getItem("idinfo"))
            setid(JSON.parse(sessionStorage.getItem("idinfo")))
        console.log(id)
    },[])

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand >Employee Corner</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <NavDropdown title={id.name} id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Nav className="logoutbtn">
                                <Button variant="secondary" onClick={logout}>logout</Button>
                            </Nav>
                        </NavDropdown>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}