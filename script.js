var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if(user.value.length == 0 || user.value.length <6){
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    }else{
        user.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
    var p_times = document.querySelector('.u_times');
    var p_check = document.querySelector('.u_check');
    if(user.value.length == 0 || pass.value.length <6){
        pass.style.border = '1px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
    }else{
        pass.style.border = '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
    }
})

function validate(){
    var nama = document.getElementById("user").value;
    if(user.value == 0 || user.value.length < 6){
        document.getElementById('error').innerHTML = 'Tolong tulis username anda'
        return false;
    }else if(pass.value == 0 || pass.value.length < 6){
        document.getElementById('error').innerHTML = 'Tolong tulis Password anda'
        return false;
    }else{
        alert('login sukses' + nama)
    }
}

function enable(cek){
    var btn = document.getElementById("btn");
    btn.disabled = cek.checked ? false : true;
    if(!btn.disabled){
        btn.focus();
    }
}