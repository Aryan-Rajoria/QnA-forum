import React from "react";
import {Container, Row, Col} from 'reactstrap';

function ColumnDisplay(props) {
    console.log(props);
    if (props) {
        let branch = props.value["Branch"];
        let instructor = props.value["Instructor"];
        let Sec_id = props.value["Sec_Id"];
        let Stud_id = props.value["Stud_Id"];
        let Stud_name = props.value["Stud_Name"];
        let Stud_points = props.value["Stud_Points"];
        let year = props.value["YearOfStudy"];
        return (
            <div>
                <Row>
                    <Col className="h3">Branch</Col>
                    <Col className="h4">{branch}</Col>
                </Row>
                <Row>
                    <Col className="h3">Instructor</Col>
                    <Col className="h4">{instructor}</Col>
                </Row>
                <Row>
                    <Col className="h3">Sec_id</Col>
                    <Col className="h4">{Sec_id}</Col>
                </Row>
                <Row>
                    <Col className="h3">Stud_id</Col>
                    <Col className="h4">{Stud_id}</Col>
                </Row>
                <Row>
                    <Col className="h3">Stud_name</Col>
                    <Col className="h4">{Stud_name}</Col>
                </Row>
                <Row>
                    <Col className="h3">Stud_points</Col>
                    <Col className="h4">{Stud_points}</Col>
                </Row>
                <Row>
                    <Col className="h3">Academic Year</Col>
                    <Col className="h4">{year}</Col>
                </Row>
            </div>
        );
    }
    return (
        <Row>
            <Col>.col</Col>
            <Col>.col</Col>
            <Col>.col</Col>
            <Col>.col</Col>
        </Row>
    );
}

export default ColumnDisplay;