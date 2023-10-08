import React from "react";
import './Contact.scss'
import { Form, Button } from "react-bootstrap";

function Contact_Me() {


    return(
      <>

      <Form className="top-50 start-50 position-absolute translate-middle">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name: </Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Number"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formText" >
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>

      </>
    )

}

export default Contact_Me;
