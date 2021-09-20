import instance from "../axios";

export function clickUpvoteAns(ans_id) {
    instance({
        method: 'post',
        url: '/update_upvotes_ans',
        data: {
            id: ans_id
        }
    })
}

export function clickUpvoteQues(ques_id) {
    instance({
        method: 'post',
        url: '/update_upvotes_ques',
        data: {
            id: ques_id
        }
    })
}
