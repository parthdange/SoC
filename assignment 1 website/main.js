let add = document.getElementById('plus');
let remove = document.getElementById('minus');

let int=document.getElementById('number');
let integer=0;

add.addEventListener('click',function(){
    integer+=1;
    int.innerHTML=integer;
    if (integer>0) {
        document.getElementById('number').style.backgroundColor="green";
    } else if(integer<0){
        document.getElementById('number').style.backgroundColor="red";
    }
    else if(integer==0){
        document.getElementById('number').style.backgroundColor="white";
    }
})

remove.addEventListener('click',function(){
    integer-=1;
    int.innerHTML=integer;
    if (integer>0) {
        document.getElementById('number').style.backgroundColor="green";
    } else if(integer<0){
        document.getElementById('number').style.backgroundColor="red";
    }
    else if(integer==0){
        document.getElementById('number').style.backgroundColor="white";
    }
})


