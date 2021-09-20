import React from "react";

import {
    ListGroupItemHeading,
    ListGroupItemText,
    ListGroup,
    ListGroupItem,
    Badge
} from 'reactstrap';

/* INPUT DATA FORMAT
let value =
    {
        question : "This is a demo question with 10 upvotes  ",
        upvotes :10,
        tag_element: "a",
        href_element: "/",
        heading: "This is the heading", (This is optional)
    }
* */
import InfoModal from "../viewinfo/InfoModal";
import {clickUpvoteAns, clickUpvoteQues} from "../../Logic/clickUpvote";


const OneRow = (props) => {
    let question = props.value.question;
    let upvotes = props.value.upvotes;
    let tag_element = props.value.tag_element;
    let href_element = "/question/" + props.value.href_element;
    let heading = props.value.heading;
    let answers = props.value.answer;
    if (answers) {
        answers = "Ans: " + answers;
    }
    let username = props.value.username;

    const handleUpvote= (e) => {
        if (heading == 'Question'){
            clickUpvoteQues(props.value.href_element);
        }
        else {
            clickUpvoteAns(props.value.href_element);
        }
    }

    if (heading) return (
        <ListGroup>
            <ListGroupItem className="" tag={tag_element} href={href_element}>
                <ListGroupItemHeading>{heading}</ListGroupItemHeading>
                <ListGroupItemText>{question}
                    <Badge color="info" onClick={handleUpvote}>Upvotes: {upvotes}</Badge>
                    <div className="col-1"></div>
                    <Badge color="success">{answers}</Badge>
                    {/*<Badge color="danger" >{username}</Badge>*/}
                    <InfoModal
                        className="small"
                        buttonLabel={username}
                    />
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    );

    else return (
        <ListGroup>
            <ListGroupItem className="justify-content-between" tag={tag_element} href={href_element}>
                <ListGroupItemText>{question}
                    <div className="col-1"></div>
                    <Badge color="info">Upvotes: {upvotes}</Badge>
                    <div className="col-1"></div>
                    <Badge color="secondary">{answers}</Badge>
                    <Badge color="danger">{username}</Badge>
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    );

}
export default OneRow;