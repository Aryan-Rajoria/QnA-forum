import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import PageNavbar from "../../components/navbar/Navbar";
import {getQuestionNAnswers} from "../../Logic/getQuestionNAnswers";
import {ListGroup} from 'reactstrap';
import OneRow from "../../components/rows/OneRow";
import AllRows from "../../components/rows/AllRows";
import SubmitAnswer from "../../components/askQuesion/SubmitAnswer";
import AskQuestion from "../../components/askQuesion/askQuestion";
// import {run_this2} from "../../axios";

function QnA(props) {
    const dispatch = props.dis;
    const user = props.user;
    // let question = props.value.question;
    // let upvotes = props.value.upvotes;
    // let tag_element = props.value.tag_element;
    // let href_element = "/question" + props.value.href_element;
    // let heading = props.value.heading;
    // let answers = props.value.answer;

    // run_this2();
    const temp = useParams();
    console.log(temp['id'])

    const [questionNanwers, set_questionNanswers] = useState();

    let value = [];
    let count = 0;
    console.log(questionNanwers);
    for (let iterator in questionNanwers) {
        count++;
        if (questionNanwers[count-1]['Asked By']) {
            value.push(
                {
                    question: questionNanwers[count - 1]['Content'],
                    upvotes: questionNanwers[count - 1]['Upvotes'],
                    //tag_element: "a",
                    href_element: questionNanwers[count - 1]['Ques_Id'],
                    heading: "Question",
                    username: questionNanwers[count-1]['Asked By']
                }
            );
        }
        else {
            value.push(
                {
                    question: questionNanwers[count - 1]['Content'],
                    upvotes: questionNanwers[count - 1]['Upvotes'],
                    //tag_element: "a",
                    href_element: questionNanwers[count-1]['Ans_Id'],
                    heading: "Answer",
                    username: questionNanwers[count - 1]['Answered By']
                }
            );
        }
    }
    if (questionNanwers) {
        // console.log(questionNanwers);
        return (
            <div>
                <PageNavbar dis={dispatch} user={user}/>
                <AllRows value={value} count={count}/>
                <SubmitAnswer
                    buttonLabel="Add Answer"
                    title="Enter your Answer"
                    dis={dispatch}
                    user={user}
                    id={temp["id"]}
                />
            </div>
        );
    }
    else {
        getQuestionNAnswers(temp['id'], set_questionNanswers);
        return (
            <div>
                <PageNavbar dis={dispatch} user={user}/>

                <ListGroup>
                    {/*QuestionRow*/}
                    {/*<OneRow value={question_value}/>*/}
                    {/*/!*AnswersRow*!/*/}
                    <AllRows value={questionNanwers} count={count}/>
                </ListGroup>

            </div>
        );
    }
}

export default QnA;