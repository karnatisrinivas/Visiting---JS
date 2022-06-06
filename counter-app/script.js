let countValue= document.getElementById("count").innerHTML
function onIncrement(){
   countValue= Number(countValue)+1;
   document.getElementById("count").innerHTML= countValue;
}

function onDecrement(){
    countValue= Number(countValue)-1;
    if(countValue < 0 ){
        countValue= 0;
        document.getElementById("count").innerHTML= countValue;
    }
  
    else{
        document.getElementById("count").innerHTML= countValue;
    }
 }
 