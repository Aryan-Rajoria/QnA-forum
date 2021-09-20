import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import ModalButton from "../Login/Modal";
import AllQ from "../../view/all_questions/AllQ";

const PageNavbar = (props) => {
    const dispatch = props.dis;
    const user = props.user;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let someText = "search";

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">InfoVault</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href={"/all_questions/" + someText}>AllQ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"/question/" + someText}>Q_and_A</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/tags"> All Tags </NavLink>
                        </NavItem>
                        {/*<UncontrolledDropdown nav inNavbar>*/}
                        {/*    <DropdownToggle nav caret>*/}
                        {/*        Options*/}
                        {/*    </DropdownToggle>*/}
                        {/*    <DropdownMenu right>*/}
                        {/*        <DropdownItem>*/}
                        {/*            Option 1*/}
                        {/*        </DropdownItem>*/}
                        {/*        <DropdownItem>*/}
                        {/*            Option 2*/}
                        {/*        </DropdownItem>*/}
                        {/*        <DropdownItem divider />*/}
                        {/*        <DropdownItem>*/}
                        {/*            Reset*/}
                        {/*        </DropdownItem>*/}
                        {/*    </DropdownMenu>*/}
                        {/*</UncontrolledDropdown>*/}
                    </Nav>
                    {/*<NavbarText>Simple Text</NavbarText>*/}
                    {/*<Button color="primary" size="lg">Login</Button>*/}
                    <ModalButton buttonLabel="Login" dis={dispatch} user={user}/>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default PageNavbar;