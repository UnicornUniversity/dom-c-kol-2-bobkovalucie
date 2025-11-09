

function convert (binNumber){
    let decNumber=0;
    let arrDigits=binNumber.toString().split('').map(Number);       //create an array of separated digits (1 or 0)


    for (let i = 0; i < arrDigits.length; i++){
    let exponent = arrDigits.length-(i+1);
    decNumber += arrDigits[i]*2**exponent;
    }
    return decNumber;
}



