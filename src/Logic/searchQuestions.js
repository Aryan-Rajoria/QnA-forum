// Search questions from given search parameter.
import instance from "../axios";

export function search_by_keyword(keyword, parent_resetting_function) {

    //console.log("search_by_keyword was called");

    instance({
        method: 'post',
        url: '/Search_Keyword',
        data: {
            KeyWord: keyword
        }
    }).then((res) => {
        //console.log(res.data);
        parent_resetting_function(res.data);
    });
}