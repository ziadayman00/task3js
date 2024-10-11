function validate(){
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;
    let result = document.getElementById("result");


    result.style.transition='all linear 0.16s'
    result.setAttribute('class','alert alert-danger p-2 text-center')

    if (user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = 'Enter Data In form';
        return false
    }else if(user.length < 3 || user.length>15){
        result.innerHTML = 'Enter name in range 3-15'
        return false
    }else if(email.indexOf("@")==-1){
        result.innerHTML = 'Enter valid email'
        return false
    }else if(pass.length<8){
        result.innerHTML = 'Enter more than 8 characters in password'
        return false
    }else if(confirm!=pass){
        result.innerHTML = 'Match the password'
        return false
    }

    document.getElementById("login-email").innerHTML = email
}
