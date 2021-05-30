import React, {useState} from 'react';
import {Button,Form, Modal} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const Add = ({addmovie}) => {
const bg ="https://www.podcastjournal.net/photo/art/grande/30944565-29344728.jpg?v=1550824498"
const [id, setId] = useState(uuidv4());
const [movie, setMovie] = useState({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    });    
    console.log(movie)
const [show, setShow] = useState(false);
const handleClose = () => {
    setShow(false) 
    setId('')
    setMovie({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    })};

const handleShow = () => setShow(true);
const Handlechange = (e) =>setMovie({...movie,id,[e.target.name]: e.target.value})
const HandleSave = ()=>{
    addmovie({id,...movie})
    handleClose()
}

const style={
    margin : '40px 620px',
    width : '130px',
    fontWeight:'bold'
}

    return (
        <>
    <Button variant="outline-info" onClick={handleShow} style={style}>
        Add a movie 
    </Button>

    <Modal show={show} onHide={handleClose}>
        <div style ={{ backgroundImage:`url(${bg})`}}>
        <Modal.Header > 
            <Modal.Title  style={{ color:'white'}}>Add  movie</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1" >
    <Form.Label style={{ color:'white'}}>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name='title' onChange={Handlechange}/>
    <Form.Label  style={{ color:'white'}}>posterUrl</Form.Label>
    <Form.Control type="text" placeholder="posterUrl" name='posterUrl' onChange={Handlechange} />
    <Form.Label  style={{ color:'white'}}>Rating</Form.Label>
    <Form.Control type="text" placeholder="Rating" name='rating' onChange={Handlechange} />
    

    <Form.Label  style={{ color:'white'}}>description</Form.Label>
    <Form.Control as="textarea" rows={3} name='description' onChange={Handlechange} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
            Close
        </Button>
        <Button variant="outline-success" onClick={HandleSave}>
            Save
        </Button>
        </Modal.Footer>
        </div>
    </Modal>
    </>
    )
}

export default Add
