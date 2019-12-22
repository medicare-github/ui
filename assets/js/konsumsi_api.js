let BaseUrl = "http://34.87.103.9:5000";

function login(username, password) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: `${BaseUrl}/user/auth`,
        contentType: "application/json",
        data: JSON.stringify({
            "username" : username,
            "password": password
        }),
        success: (res) => {
            if(res['ca'] == 'director'){
                window.location.href = "/ui/admin_area/Dashboard.html"
            }
            localStorage.setItem('token', res['token'])
            localStorage.setItem('director', res['ca'])
        },
        error: function (xhr, ajaxOptions, thrownError) {
            window.location.href = "/ui"
        },
        dataType: 'json'
    });
}

function create_ca(data) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: `${BaseUrl}/category-access`,
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        data: JSON.stringify({
            "name" : data['name_new_ca'],
            "add_user" : false,
            "delete_user" : false,
            "edit_user" : false,
            "add_job" : data['add_job_new_ca'],
            "delete_job" : data['delete_job_new_ca'],
            "update_job" : data['update_job_new_ca'],
            "show_job" : data['show_job_new_ca'],
            "print_job" : data['print_job_new_ca'],
            "check_job" : false,
            "service_job" : data['service_job_new_ca']
        }),
        success: (res) => {
            console.log(res)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText)
        },
        dataType: 'json'
    });
}


