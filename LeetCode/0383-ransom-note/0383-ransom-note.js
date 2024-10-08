/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    const wordMap = {};

    for (let i = 0; i < magazine.length; i++) {
        const target = magazine[i];

        if (wordMap[target]) { 
            wordMap[target] += 1;
        } else {
            wordMap[target] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const target = ransomNote[i];

        if (wordMap[target]) {
            wordMap[target] -= 1;

            if (wordMap[target] === 0) delete wordMap[target];
        } else {
            return false;
        }
    }

    return true;
 };

/**
1. 일단 주어진 magazine를 순회하면서 Map에 저장한다.
2. 그리고 ransomNote를 순회하면서 Map에 저장된걸 하나씩 뺀다.
3. 맵의 사이즈가 1이상이면은 False를 반환한다.

 */