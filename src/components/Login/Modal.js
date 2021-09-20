import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

import LoginForm from "./LoginForm"
// import instance from "../../axios";
import {check_email_password} from "../../Logic/CheckLogin";
// import {useStateValue} from "../../StateProvider";

const ModalButton = (props) => {
    const className = props.className;
    const dispatch = props.dis;
    const user = props.user;
    console.log("Modal Button user value " + user);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        console.log(email);
        console.log(password);
    }

    let temp = {email: "", password: ""};
    const [entery, setEntery] = useState(temp);
    let value = {
        entered_value: entery,
        set_function: setEntery
    }
    const {email, password} = entery;

    const handleSubmit = () => {
        toggle();
        check_email_password(email, password, dispatch);
    }

    let buttonLabel = user;
    console.log(user);

    return (
        <div>
            <Button color="danger" size="lg" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <LoginForm value={value}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalButton;