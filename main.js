/**
 * The main function which calls the application. 
 * Coversion input number from binary to decimal number system
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */

export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
	let decNumber=0;
    let arrDigits=inputNumber.split('').map(Number);       //create an array of separated digits

	
    if (inputNumberSystem!==2){								//validation of input and output number systems
        console.log("Invalid input number system");
        process.exit(1)
    }
    else if (outputNumberSystem !== 10){
        console.log("Invalid output number system");
        process.exit(1)
    }

    for (let i = 0; i < arrDigits.length; i++) {            //validate input number as binary
        if(arrDigits[i]!==0 && arrDigits[i]!==1){
            console.log("Input is not a binary number");
            process.exit(1)
        }
    }

    for (let i = 0; i < arrDigits.length; i++){             //conversion calculation
        let exponent = arrDigits.length-(i+1);
        decNumber += arrDigits[i]*2**exponent;
    }

    return decNumber.toString();
}



/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10];
}
