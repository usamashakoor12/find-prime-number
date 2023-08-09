var primeNumber=document.getElementById("btn")
function good(){
    let us= document.getElementById("input").value;
    for(let i=2; i<us; i++)
    if(us % i==0){
        primeNumber.innerHTML=(`${us} This is not a prime number`);
        // return false;
    }
          primeNumber.innerHTML=(`${us} This  is a prime number`);
        //  return true;
    
    
 }