import {Button} from "react-bootstrap"
import { useEffect } from "react"
import { Card, FloatingLabel, Form, FormControl, FormGroup } from "react-bootstrap"
export default function Contact() {
    useEffect(()=>{document.title="Contact | Mental Fitness Therapy"},[])
    return <><div className="page-content"><h3>Feel free to call or send me a message to set up an appointment or if you have any other questions. 
        Please keep in mind that electronic messaging is not a secure form of communication so it’s best to leave sensitive information out.  If you need help with a psychiatric emergency, call 911 immediately.</h3><br />
    <h3>Phone number: <a href="tel:6504197004">650-419-7004</a> </h3><br />
    <h3>Email: <a href="mailto:ruthie@mentalfitnesstherapy.org">ruthie@mentalfitnesstherapy.org</a></h3></div>

    <Card className="w-50 mx-auto mb-5 border-4 border-secondary">
        <Card.Body>
        <Card.Title className="text-center">
            <u>Contact Form</u>
        </Card.Title>
    <Form className="py-4 w-50 mx-auto">
        <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
            <FormControl type="text" placeholder="Johnny" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
            <FormControl type="text" placeholder="Appleseed" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
            <FormControl type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTel" label="Phone Number" className="mb-3">
            <FormControl type="tel" placeholder="(201)-555-5555" />
            <Form.Text id="telHelpBlock" muted >
            (where it is okay to leave a message)
            </Form.Text>
        </FloatingLabel>
        
        <Form.Select aria-label="select" style={{ "whiteSpace":"normal" }} className="mb-3">
            <option>Preferred method of contact</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
        </Form.Select>
        <FormGroup controlId="controlMessageTextArea" className="mb-3">
            <FormControl as="textarea" placeholder="Type your message here" className="h-50"/>
        </FormGroup>
        <div style={{ "float":"right" }}>
        <Button type="submit" variant="primary" >Submit</Button>
        </div>
    </Form>
    </Card.Body>
    </Card>
    </>
}