const title=document.getElementById('title');
const first=document.getElementById('first');
const singin=document.getElementById('singin');
const singup=document.getElementById('singupbtn');

singup.onclick=function(){
    title.innerText="Sing Up";
    first.style.display="block";
}
singin.onclick=function(){
    title.innerText="Login";
    first.style.display="none";
}