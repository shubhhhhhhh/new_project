import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateEmployee } from '../../api/Api';

export default function UpdatePop(props) {

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
         await updateEmployee(form,form._id).then(res=>console.log(res.message))
         await props.getallemployee()
         handleClose()

    }
  
    return (
      <>
        <Modal     dialogClassName="modal-90w" show={show} onHide={handleClose}>
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
