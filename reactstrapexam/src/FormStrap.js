import { useState } from "react";
import { Form, Label, Input, FormText, FormGroup, Button, Col } from 'reactstrap';
function FormStrap() {
    return (
        <>
            <Form style={{ width: "600px", margin: "10px auto" }}>
                <FormGroup row>
                    <Label for="examEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="Examemail" placeholder="email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="Examepassword" placeholder="password" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examselect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Exameselect" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="examText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="examFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <Label check>
                        <Input type="radio" name="radio1" /> {' '}
                        Option one is this and that-be sure to include why it is great
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" /> {' '}
                        Option two can be something else and selecting it will deselect option one
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" disabled /> {' '}
                        Option three is diabled
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> {' '}
                        check me out
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <br /><br />
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examEmail2" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="examEmail2" placeholder="something@kosta.com" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examPassword2" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examPassword2" placeholder="don't tell!" />
                </FormGroup>
            </Form>
        </>
    )

}
export default FormStrap;