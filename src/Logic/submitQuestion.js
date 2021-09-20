import instance from "../axios";

export function submit_question(cont, tag, pid) {
    instance({
        method: 'post',
        url: '/New_Question',
        data: {
            content  : cont,
            Tag : tag,
            Person_Id : pid
        }
    });
}