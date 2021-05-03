import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const Submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or description cannot be empty")
        }
        else {
          addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
      const divStyle={
          width:"30%",
          margin:"auto",
          boxShadow:"0px 0px 20px 5px #000"

      }
        return (
            <div className="container text-light bg-gradient text-center bg-dark py-5 my-5" style={divStyle}  >
                <h2 className="text-">Add Todo Here</h2>
                <Form onSubmit={Submit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Todo Title</Form.Label>
                        <Form.Control htmlFor="title" className="bg-light" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Todo" />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Todo Description</Form.Label>
                        <Form.Control htmlFor="desc" type="message" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder="Enter Description" />

                    </Form.Group>



                    <Button className="btn-sm" color="secondary" variant="contained" type="submit">
                        Add Todo
  </Button>
                </Form>
            </div>
        )
    }
