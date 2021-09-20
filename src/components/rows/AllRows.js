import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    Badge
} from 'reactstrap';
import OneRow from "./OneRow";

const AllRows = (props) => {
    let count = props.count;
    let value = props.value;
    // console.log(count)
    // console.log(value)
    let rows = [];
    for (var i = 0; i < count; i++) {
        rows.push(<OneRow value={value[i]}/>);
    }

    return (
        <ListGroup>
            {rows}
        </ListGroup>
    );
}

export default AllRows;