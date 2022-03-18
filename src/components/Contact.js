import { Component } from "react";
import { Form, FormGroup, Input, Button, Label, Row, Col } from "reactstrap";

class Contact extends Component {
    render () {
        return (
            <div>
                
                <div className="case">
                    <div className="row">
                        <div className="col">
                            <h1 className="mb-5">Contact Us</h1>
                        </div>
                    </div>
                </div>
                
                <Form action="https://formsubmit.co/imani.j.chandler@gmail.com" method="POST">
                    <FormGroup>
                        <Row>
                            <Label className="mr-5" htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                            <Input model=".firstName" id="firstName" name="firstName" placeholder="First Name" required></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label className="mr-5" htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                            <Input model=".lastName" id="lastName" name="lastName" placeholder="Last Name" required></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label className="mr-5" htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                            <Input model=".email" id="email" name="email" placeholder="Email" required></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label className="mr-5" htmlFor="feedback" md={2}>Question /Feedback</Label>
                            <Col md={10}>
                            <Input type="textarea"  rows="5" model=".feedback" id="feedback" name="feedback" required></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Input type="hidden" name="_next" value="http://localhost:8000/thankyou"></Input>
                </Form>
            </div>
        )
    }
}

export default Contact;