import instance from "../axios";

export function search_by_tag(tag, dispatch) {
    instance({
        method: 'post',
        url: '/Search_tags',
        data: {
            tag : tag
        }
    }).then((res) => {
        dispatch(res.data);
    })
}