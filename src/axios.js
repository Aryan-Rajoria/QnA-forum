import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3300'
});

export default instance;

// export function run_this() {
//     instance({
//         method: 'get',
//         url: '/call/Show_Department'
//     })
// }
//
// export function run_this2() {
//    instance({
//        method: 'post',
//        url: '/Show_Department',
//         data: {
//            Ques_Id: 10,
//             Ans_Id: 5,
//             Content: "This is the answer"
//         }
//     }).then((res) => {
//         for (let x in res.data[0])
//         console.log(res.data[0][x]);
//    });
// }
