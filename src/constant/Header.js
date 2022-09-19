import { Button, Container, Navbar ,Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { clearToken } from "./Constant"

export default function Header() {

    const navigate = useNavigate();

    function logout() {
        clearToken()
        navigate('/')
    }

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand >Employee Corner</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        <Nav className="logoutbtn">
                            <Button variant="secondary" onClick={logout}>logout</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}