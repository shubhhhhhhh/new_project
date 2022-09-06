import React, { Component, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { getAllEmployee, addEmployee, deleteEmployee ,updateEmployee} from "../../api/Api";
import '../Dashboard/dashboard.css'
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import { getToken } from "../../constant/Constant";


export default function Dashboard(props) {
   
    const [data, setData] = useState([{ name: 'a', phone: 1 }, { name: 'r', phone: 3 }, { name: 'w', phone: 2 }])
    const [onedata,setOnedata]=useState({});

    async function getallemployee() {
        try {
            await  getAllEmployee(getToken()).then(res=>setData([...res.data]))
        }
        catch (error) {
            alert("error hua bhai")
        }
    }

    useEffect(() => {
        getallemployee()
    }, [])

    const [addbtn, setaddbtn] = useState(false);
    let addui ;
    function addUI() {
        addbtn ? setaddbtn(false) : setaddbtn(true)
    }
    if (addbtn == true)
        addui = <AddPop addui={addUI} getallemployee={getallemployee}  />        


    const [deletebtn,setdeletebtn]=useState(false)
    let deleteui;
    function deldata(event) {
        setOnedata( data[event.target.value])
        console.log(onedata)
        deleteUI()
    }
    function deleteUI(){
        deletebtn?setdeletebtn(false):setdeletebtn(true)
    }
    if(deletebtn){
        deleteui = <DeletePop onedata={onedata} deleteui={deleteUI}  getallemployee={getallemployee}/>
    }
    

    const [updatebtn, setupdatebtn] = useState(false);
    let updateui;
    function update(event) {
        setOnedata(data[event.target.value])
        console.log(onedata)
        updateUI()
    }
    function updateUI() {
        updatebtn?setupdatebtn(false):setupdatebtn(true)
     }
    if (updatebtn == true)
        updateui = <UpdatePop onedata={onedata} updateui={updateUI} getallemployee={getallemployee} />        



    const [viewbtn, setviewbtn] = useState(false);
    let viewui;
    function view(event) {
        setOnedata(data[event.target.value])
        console.log(onedata)
        viewUI()
    }
    function viewUI() {
        viewbtn?setviewbtn(false):setviewbtn(true)
     }
    if (viewbtn == true)
        viewui = <ViewPop onedata={onedata} viewui={viewUI} />        

 
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
                                <th>Name</th>
                                <th>salary</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{i + 1}</td>
                                        <td>{v.name}</td>
                                        <td>{v.salary}</td>
                                        <td>{v.phone}</td>
                                        <td><button value={i} onClick={update}>+</button></td>
                                        <td><button value={i} onClick={deldata}>-</button></td>
                                        <td><button value={i} onClick={view}>@</button></td>                                        
                                    </tr>
                                )
                            })}
                            {/* {[<tr><td>hello</td></tr>]}   array get processed itself within fragmentation and runs */}
                        </tbody>
                    </Table>
                </Container>
            </Navbar>

            {addui}
            {updateui}
            {deleteui}
            {viewui}
        </>
    )
}

function AddPop(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => handleCancel();
    // const handleShow = () => setShow(true);
    const [form, setForm] = useState({});

    function handleChange(event) {

        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)

    }

    const addemployee = async () => {
        try {
            await addEmployee(
               getToken(), form)
                .then(res => {
                    console.log(res.message)
                })
        }
        catch (error) {
            alert("error hua bhai")
        }
    }

    async function handleSubmit() {
        await addemployee()
        await props.getallemployee()
         handleClose()
    }

    function handleCancel() {
        props.addui()
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>add employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

                        <Button variant="primary" onClick={handleSubmit} className="add" style={{ width: '8rem' }} >
                            add
                        </Button>

                        <Button variant="primary" onClick={handleCancel} className="cancel" style={{ width: '8rem' }} >
                            cancel
                        </Button>
                    </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

function UpdatePop(props) {

    const [show, setShow] = useState(true); 
    const handleClose = () => handleCancel();  
    const [form, setForm] = useState({...props.onedata});
   
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form)
    }
    function handleCancel() {
        props.updateui()
    }

    async function handleUpdate(){
         await updateEmployee(getToken(),form,form._id)
         await props.getallemployee()
         handleClose()
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>update employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" onChange={handleChange} name="name" placeholder=" enter name" value={form.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter email" value={form.email}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" onChange={handleChange} name="phone" placeholder="enter phone no." value={form.phone}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" onChange={handleChange} name="salary" placeholder=" enter salary" value={form.salary} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" onChange={handleChange} name="address" placeholder="enter address" value={form.address} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleUpdate} className="add" style={{ width: '8rem' }} >
                           update
                        </Button>

                        <Button variant="primary" onClick={handleCancel} className="cancel" style={{ width: '8rem' }} >
                            cancel
                        </Button>

                    </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

function DeletePop(props) {
    const [form, setForm] = useState({...props.onedata});

    const [show, setShow] = useState(true); 
    const handleClose = () => handleCancel();  

    function handleCancel() {
        props.deleteui()
    }

    async function handleDelete(){
         await deleteEmployee(getToken(),form._id)
         await props.getallemployee()
         handleClose()
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>delete employee's details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Label>are you sure to delete this employee's details?</Form.Label>
                        
                        <Button variant="primary" onClick={handleDelete} className="add" style={{ width: '8rem' }} >
                          delete
                        </Button>

                        <Button variant="primary" onClick={handleCancel} className="cancel" style={{ width: '8rem' }} >
                            cancel
                        </Button>

                    </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

function ViewPop(props) {

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