/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    // const formatBianry = binary => {
    //     const binaryList = [...binary].slice();
    //     let digits = 0;
    //     let decimal = 0;

    //     while (binaryList.length !== 0) {
    //         const target = binaryList.pop();

    //         if (target !== "0") {
    //             const number = 2 ** digits;
    //             decimal += number;
    //         }

    //         digits += 1;
    //     }

    //     return decimal;
    // };

    const formatBinary = binary => {
        return BigInt(`0b${binary}`);
    };

    // const formatDecimal = decimal => {
    //     let number = Number(decimal);
    //     let binary = "";
    
    //     if (decimal === 0) {
    //         return decimal.toString();
    //     }

    //     while (number > 0) {
    //         const remainder = number % 2;

    //         number = Math.floor(number / 2);
    //         binary = remainder + binary;
    //     }

    //     return binary;
    // }

    const formatDecimal = decimal => {
        if (decimal === 0n) {
            return "0";
        }

        let binary = "";
        while (decimal > 0n) {
            binary = (decimal % 2n).toString() + binary;
            decimal = decimal / 2n;
        }

        return binary;
    }

    const bigintA = formatBinary(a);
    const bigintB = formatBinary(b);

    return formatDecimal(bigintA + bigintB);
   
};