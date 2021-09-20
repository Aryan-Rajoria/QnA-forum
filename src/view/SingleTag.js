import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import PageNavbar from '../components/navbar/Navbar';
import AllRows from "../components/rows/AllRows";
import {search_by_tag} from "../Logic/searchTag";
// import {getNumberofAnswers} from "../../Logic/getNumberofAnswers";


function SingleTag(props) {
    const dispatch = props.dis;
    const user = props.user;
    console.log(user);
    let temp_temp = useParams();
    let temp = "#" + temp_temp["id"];

    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
    // var temp = urlParams.get('id');

    const [questions, set_questions] = useState();

    let value = [];
    let count = 0;
    for (let iterator in questions) {
        count++;
        let href_ele = questions[count - 1]['Ques_Id'];
        //let number_of_answers = getNumberofAnswers(questions[count - 1]['Ques_Id']);
        value.push(
            {
                question: questions[count - 1]['Content'],
                upvotes: questions[count - 1]['Upvotes'],
                tag_element: "a",
                href_element: href_ele,
                answer: questions[count-1]['Num_of_answers']
            }
        )
        // console.log({
        //     question: questions[count - 1]['Content'],
        //     upvotes: questions[count - 1]['Upvotes'],
        //     tag_element: "a",
        //     href_element: questions[count - 1]['Ques_Id'],
        //     answer: questions[count-1]['Number_of_answers']
        // })
    }

    if (questions) {
        return (
            <div>
                <PageNavbar dis={dispatch} user={user}/>
                <h1>
                    Your Search Tag was:
                </h1>
                <h1>{temp}</h1>

                <AllRows value={value} count={count}/>
            </div>
        );
    }
    else {
        search_by_tag(temp, set_questions)
        return (
            <div>
                <PageNavbar dis={dispatch} user={user}/>
                <h1>
                    Your Search parameter was:
                </h1>
                <h1>{temp}</h1>

                <AllRows value={value} count={count}/>
            </div>
        );
    }
}

export default SingleTag;