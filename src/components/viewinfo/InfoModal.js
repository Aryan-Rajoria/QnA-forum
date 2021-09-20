import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {view_info} from "../../Logic/view_info";
import ColumnDisplay from "../ColumnDisplay";

const InfoModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState();

    if(!info) {
        view_info(buttonLabel, setInfo);
    }

    return (
        <div>
            <Button className="small" color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                {/*Column Display here*/}
                <ColumnDisplay value={info}/>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default InfoModal;