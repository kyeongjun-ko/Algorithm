/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    const formatBinary = binary => {
        return BigInt(`0b${binary}`);
    };

    const formatDecimal = decimal => {
        let binary = "";

        if (decimal === 0n) {
            return "0";
        }

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