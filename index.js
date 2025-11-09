

function convert (binNumber){
    let dtoOut=0;
    let arrDigits=binNumber.split('').map(Number);       //create an array of separated digits (1 or 0)

    for (let i = 0; i < arrDigits.length; i++){
    let exponent = arrDigits.length-(i+1);
    dtoOut += arrDigits[i]*2**exponent;
    }

    return dtoOut;
}

let inputNumber = "1111101011";
console.log(convert(inputNumber));



