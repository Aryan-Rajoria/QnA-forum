import instance from "../axios";

export function view_info(ids, dispatch) {
    let substring = ids.substring(0,1);
    if (substring == 'S') {
        instance({
            method: 'post',
            url: '/StudentInfo',
            data: {
                Id  : ids
            }
        }).then(res => {
            //console.log(res.data);
            dispatch(res.data);
        });
    }
    else {
        instance({
            method: 'post',
            url: '/Show_Teacher',
            data: {
                Id  : ids
            }
        }).then(res => {
            //console.log(res.data)
            dispatch(res.data);
        })
    }
}