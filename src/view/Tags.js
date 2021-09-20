import React, {useState} from 'react';
import {
    CardGroup,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import PageNavbar from "../components/navbar/Navbar";
import {NavLink} from "react-router-dom";
import instance from "../axios";

function Tags(props) {
    const dispatch = props.dis;
    const user = props.user;

    const [tags, set_tags] = useState();

    let row_of_card_defiend = [];

    for (let x in tags) {
        row_of_card_defiend.push(<Card_defined tag={tags[x]['tag_name']} />)
    }
    if (!tags) {
        instance({
            method: 'get',
            url: '/call/Show_tag'
        }).then((res) => {
            set_tags(res.data);
        });
    }
    return (
        <div>
            <PageNavbar dis={dispatch} user={user}/>
            <CardGroup>
                {row_of_card_defiend}
            </CardGroup>
        </div>
    );
}

function Card_defined(props) {
    let str = props.tag;
    str = str.substring(1);
    return (
        <Card>
            <CardHeader tag="h3">{props.tag}</CardHeader>
            <CardBody>
                {/*<CardTitle tag="h5">Special Title Treatment</CardTitle>*/}
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                <NavLink to={"/stag/" + str}><Button>Check</Button></NavLink>
            </CardBody>
            {/*<CardFooter className="text-muted">Footer</CardFooter>*/}
        </Card>
    );
}

export default Tags;