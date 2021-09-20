import instance from "../axios";


export function getQuestionNAnswers(q_id, resetMethod) {
    // console.log('getQuestionNAnswers was run');
    var output = [];
    instance(
        {
            method: 'post',
            url: '/Show_Question',
            data: {
                Id: q_id
            }
        }
    ).then((res)=>{
        output.push(res.data[0]);
    })
    instance(
        {
            method: 'post',
            url: '/Show_Answers',
            data: {
                id: q_id
            }
        }
    ).then((res)=>{
        for (let x in res.data) {
            // console.log(res.data[x]);
            output.push(res.data[x]);
        }
        resetMethod(output);
    })
}