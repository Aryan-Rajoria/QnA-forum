import React from "react";
import PageNavbar from '../../components/navbar/Navbar';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button} from "reactstrap";
import {Redirect} from "react-router-dom";
import AskQuestion from "../../components/askQuesion/askQuestion";
import AllQ from "../all_questions/AllQ";


function Home(props) {
    const dispatch = props.dis;
    const user = props.user;
    console.log("This is home user:" +user);
    // This is how to get query parameter
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    var question = urlParams.get('id');
    console.log(question);
    if (urlParams.has('id')) {

        return( <AllQ dis={dispatch} user={user}/> );
    }

    return (
        <div>
            <PageNavbar dis={dispatch} user={user}/>
            {/*SearchBox will come here centered*/}
            <Form>
                <FormGroup row>
                    <Label for="search" sm={2}>Search</Label>
                    <Col sm={10}>
                        <Input type="search" name="id" id="exampleSearch"
                               placeholder="Write Your Questions Here."/>
                        <Button>Search</Button>
                    </Col>
                </FormGroup>
            </Form>
            <AskQuestion buttonLabel="Ask a question" title="Enter your question" dis={dispatch} user={user}/>
            {/*SearchBox Area above*/}
        </div>
    );
}


export default Home;