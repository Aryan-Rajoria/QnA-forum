import instance from "../axios";

export function answer(ques_id,cont,pers) {
    instance({
        method: 'post',
        url: '/New_Answers',
        data: {
            Ques_Id : ques_id,
            Content : cont,
            Person_Id : pers
        }
    })
}