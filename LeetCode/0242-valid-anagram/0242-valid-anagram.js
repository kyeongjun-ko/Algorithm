/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const copyTarget = [...t];

    for (let i = 0; i < s.length; i++) {
        const target = s[i];

        if (!copyTarget.includes(target)) return false;

        const removeIndex = copyTarget.indexOf(target);

        copyTarget.splice(removeIndex, 1);
    }

    return copyTarget.length === 0;
};