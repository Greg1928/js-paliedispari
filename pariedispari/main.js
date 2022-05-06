/* functions */
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sumIsEven(sum){
    if ( sum%2 === 0){
        return true;
    }
    return false;
    }



/* main */

let even;
let odd;
let first = prompt("select 0 for Even --- Select 1 for Odd");
if ( first === "0"){
    console.log("User ---> Even");
    even = "User";
    console.log("Cpu ---> Odd");
    odd = "Cpu";
}else {
    console.log("User ---> Odd");
    odd = "User";
    console.log("Cpu ---> Even");
    even = "Cpu";
}
let userNumber = Number(prompt("Choose a number from 1 to 5..."));
console.log("User Number: " + userNumber);

let cpuNumber = Number(randomNumber(1,5));
console.log("Cpu Number: " + cpuNumber);

let sum = userNumber + cpuNumber;
console.log("Sum is: " + sum);

if(sumIsEven(sum)){
    console.log(even + " Win!");
}else {
    console.log(odd + " Win!");
}

