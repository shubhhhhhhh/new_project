import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
 
export default function ViewPop(props) {

    const [show, setShow] = useState(true); 
    const handleClose = () => handleCancel();  
    const [form, setForm] = useState([{...props.onedata}]);

    function handleCancel() {
        props.viewui()
    }
  
    return (
      <>
        <Modal  size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>view employee detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Navbar>
                <Container>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>salary</th>
                                <th>address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {form.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{i + 1}</td>
                                        <td>{v._id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.phone}</td>
                                        <td>{v.salary}</td>
                                        <td>{v.address}</td>
                                        {/* <td><button value={i} onClick={update}>+</button></td>
                                        <td><button value={i} onClick={deldata}>-</button></td>
                                        <td><button value={i} onClick={view}>@</button></td>                                         */}
                                    </tr>
                                )
                            })}
                            {/* {[<tr><td>hello</td></tr>]}   array get processed itself within fragmentation and runs */}
                        </tbody>
                    </Table>
                </Container>
            </Navbar>
          </Modal.Body>
        </Modal>
      </>
    );
}