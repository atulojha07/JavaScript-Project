let inputslider=document.getElementById("inputslider");
let slidervalue=document.getElementById("slidervalue");
let passbox=document.getElementById('passbox');
let lowercase=document.getElementById('Lowercase');
let uppercase=document.getElementById('Uppercase');
let number=document.getElementById('Number');
let symbole=document.getElementById('Symbole');
let genbtn=document.getElementById('genbtn');
let copyicon=document.getElementById('copyicon');

// SHOW input slider Vlaue
slidervalue.textContent=inputslider.value;

inputslider.addEventListener("input",()=>{
slidervalue.textContent=inputslider.value;

});

genbtn.addEventListener("click",()=>{
    passbox.value=generatepass();
});


    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let allnumber="0123456789";
    let allsymbole="!@#$%^&*~";
 function generatepass(){
    let genpass="";
    let allchar="";

    allchar += uppercase.checked ? upperCase:"";
    allchar += lowercase.checked ? lowerCase:"";
    allchar += number.checked ? allnumber:"";
    allchar += symbole.checked ? allsymbole:"";


    if(allchar==""|| allchar.length==0){
        return genpass;
    }
    let i=1;
    while(i<=inputslider.value){
        genpass +=allchar.charAt (Math.floor(Math.random()*allchar.length));
        i++;
    }
   
    return genpass;
}
copyicon.addEventListener("click",()=>{
    if(passbox.value !="" || passbox.length>=1){
    navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title="password copy";

        setTimeout(()=>{
            copyicon.innerHTML="content_copy";
        copyicon.title="";

        },2000);
    }
});