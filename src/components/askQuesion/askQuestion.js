import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import General_form from "./general_form";
import {useStateValue} from "../../StateProvider";
import {submit_question} from "../../Logic/submitQuestion";

const AskQuestion = (props) => {
    const buttonLabel = props.buttonLabel;
    const className = props.className;
    const title = props.title;
    const dispatch = props.dis;
    const user = props.user;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let temp = {email: "", password: ""};
    const [entery, setEntery] = useState(temp);
    let value = {
        entered_value: entery,
        set_function: setEntery
    }
    const {email, password} = entery;

    const handleSubmit = ()=> {
        toggle();
        submit_question(email, password, user);
    }

    return (
        <div>
            <Button color="info" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                {/*Form is need here*/}
                <General_form label="Question" value={value}/>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AskQuestion;