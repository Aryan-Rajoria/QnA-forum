import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const LoginForm = (props) => {
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

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="something@idk.cool"
                    value={email}
                    onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="don't tell!"
                    value={password}
                    onChange={handleInputChange}/>
            </FormGroup>
        </Form>
    );
}

export default LoginForm;