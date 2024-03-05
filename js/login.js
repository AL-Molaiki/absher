
let create=document.getElementById("create");
let log1=document.getElementById("log1");
let log2=document.getElementById("log2");

create.onclick=function(){

log1.classList.toggle("login_one");
log2.classList.toggle("login_tow");

}

document.getElementById('btn-login').onclick=function(){
    let name=document.getElementById('user-name').value;
    let password=document.getElementById('user-password').value;
    console.log(name);
    console.log(password);
    if(name=='admin' && password=='admin' ){
    
       window.open('../dashboard/dash.html');

    }

}