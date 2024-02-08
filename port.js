let number = document.getElementById("number");
let counter =10;
setInterval(() => {
    if(counter==90){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%"
    }

}, 26
)
let number2 = document.getElementById("number2");
let counter2 =10;
setInterval(() => {
    if(counter2==84){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%"
    }

}, 28
)
let number3 = document.getElementById("number3");
let counter3 =10;
setInterval(() => {
    if(counter3==80){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%"
    }

}, 28
)
let number4 = document.getElementById("number4");
let counter4 =10;
setInterval(() => {
    if(counter4==75){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%"
    }

}, 32
)