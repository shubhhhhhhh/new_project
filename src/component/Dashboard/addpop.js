import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addEmployee } from '../../api/Api';
import { getToken } from '../../constant/Constant';


export default function AddPop(props) {
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
