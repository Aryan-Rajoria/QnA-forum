import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const General_form = (props) => {
    let entery = props.value.entered_value;
    let setEntery = props.value.set_function;
    const {email, password} = entery;
    const handleInputChange = (e)=> {
        setEntery(
            {
                ...entery,
                [e.target.name]: e.target.value
            }
        );
        console.log(entery);
    }
    let label = props.label;
    return (
        <Form>
            <FormGroup row>
                <Label for="exampleText" sm={2}>{label}</Label>
                <Col sm={10}>
                    <Input type="textarea" name="email" id="exampleText" value={email} onChange={handleInputChange}/>
                </Col>
                <Col sm={10}>
                    <Input type="textarea" name="password" id="exampleText" value={password} onChange={handleInputChange}/>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default General_form;