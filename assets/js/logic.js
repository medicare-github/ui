let btnLogin = document.getElementById('btnLogin');
let btnSaveCa = document.getElementById('btnSaveCa');

if(btnLogin){
    btnLogin.addEventListener('click', ()=>{
        let field_username = document.getElementById('field_username').value;
        let field_password = document.getElementById('field_password').value;

        login(field_username, field_password)
    })
}

if(btnSaveCa){
    btnSaveCa.addEventListener('click', ()=>{
        event.preventDefault()
        let name_new_ca = document.getElementById('name_new_ca').value
        let add_job_new_ca = document.getElementById('add_job_new_ca').checked
        let update_job_new_ca = document.getElementById('update_job_new_ca').checked
        let delete_job_new_ca = document.getElementById('delete_job_new_ca').checked
        let show_job_new_ca = document.getElementById('show_job_new_ca').checked
        let print_job_new_ca = document.getElementById('print_job_new_ca').checked
        let service_job_new_ca = document.getElementById('service_job_new_ca').checked
        

        let data = {
            'name_new_ca' : name_new_ca, 
            'add_job_new_ca': add_job_new_ca, 
            'update_job_new_ca': update_job_new_ca, 
            'delete_job_new_ca': delete_job_new_ca, 
            'show_job_new_ca': show_job_new_ca, 
            'print_job_new_ca': print_job_new_ca, 
            'service_job_new_ca': service_job_new_ca
        }
        create_ca(data)
    })
}