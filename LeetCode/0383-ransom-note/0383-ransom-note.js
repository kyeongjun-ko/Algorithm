/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
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

			continue;
		}

		return false;
	}

	return true;
};
