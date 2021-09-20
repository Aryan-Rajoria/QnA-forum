import instance from "../axios";


// export function getNumberofAnswers (q_id) {
//     //console.log('getNumberofAnswers was called');
//     var output = 0;
//     instance(
//         {
//             method: 'post',
//             url: '/count_answers',
//             data: {
//                 id: q_id
//             }
//         }
//     ).then(res => {
//         console.log(res.data[0]["Count(*)"]);
//         return res.data[0]["Count(*)"];
//     })
//     return res.data[0]["Count(*)"];
// }
