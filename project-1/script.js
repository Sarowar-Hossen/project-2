const counter1 = document.querySelector(".counter1");
const counter2 = document.querySelector(".counter2");

let count = 1;

setInterval(()=>{

    if(count <= 1000){
        count++;
    counter1.innerText = count;
    }
    
},1)
setInterval(()=>{

    if(count <= 2000){
        count++;
        counter2.innerText = count;
    }
},1)