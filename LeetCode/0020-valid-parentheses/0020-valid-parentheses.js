/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const closeBraketList = [")", "]", "}"];
    const succesList = ["()", "{}", "[]"];
     
    const openStack = [];

    for (let bracket of [...s]) {
        if (closeBraketList.includes(bracket)) {
            if (openStack.length === 0) {
                return false;
            }

            const target = openStack.pop() + bracket;

            if (!succesList.includes(target)) {
                return false
            }
            
            continue;
        }

        openStack.push(bracket);
    }

    return openStack.length === 0 ? true : false;
};