import instance from "../axios";

export function check_email_password(email, password, dispatch) {
    console.log("check_email_password was called");
    var pid;
    instance({
        method: 'post',
        url: '/CheckStudent',
        data: {
            name: email,
            pass: password
        }
    }).then((res) => {
        console.log(res.data);
        if(res.data[0]['Stud_Id']) {
            console.log(res.data[0]['Stud_Id'])
            pid = res.data[0]['Stud_Id'];
            dispatch (pid);
        }
    });
    instance({
        method: 'post',
        url: '/CheckTeacher',
        data: {
            name: email,
            pass: password
        }
    }).then((res) => {
        console.log(res.data);
        if(res.data[0]['Teacher_Id']) {
            console.log(res.data[0]['Teacher_Id'])
            pid = res.data[0]['Teacher_Id'];
            dispatch (pid);
        }
    });
}