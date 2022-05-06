/* funzione */
function palindroma (string, lenght) {
    let reverse = "";
    let y;
    for ( let i = lenght -1 ; i>=0; i--){
        y=string[i];
        reverse = reverse + y;
    }
    if (reverse === string){
        return true;
    }
        return false;
}

/* main */
let word = "otto";
let lenght = word.length;

if( palindroma(word, lenght)){
    console.log("yes");
}else {
    console.log("not");
}


