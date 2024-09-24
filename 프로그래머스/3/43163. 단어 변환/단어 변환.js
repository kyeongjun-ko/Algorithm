const dropString = (word, index) => {
    return [...word].filter((_, i) => i !== index).join("");
}

const findDropString = (droppedWord, index, wordList) => {
    const indexList = [];
    let comparable = false;
        
    for (let i = 0; i < wordList.length; i++) {
        const droppedFromWords = dropString(wordList[i], index);

        if (droppedWord === droppedFromWords) {
            comparable = true;

            indexList.push(i);
        }
    }

    return [comparable, indexList];
}

function solution(begin, target, words) {
    const visited = [...words].map(e => 0);
    const search = [[begin, 0, visited]];
    let formatCount = Infinity;

    while (search.length !== 0) {
        const compareTarget = search.shift();
        const [currentWord, currentCount, visitList] = compareTarget;

        if (currentWord !== target) {
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] !== target[i]) {
                    const targetWord = dropString(currentWord, i);

                    const [comparable, indexList] = findDropString(targetWord, i, words);

                    if (!comparable) {
                        continue;
                    }

                    for (const index of indexList) {
                        if (visitList[index] === 0) {
                            const newVisited = visitList.slice();
                            const newCount = currentCount + 1;
                            
                            newVisited[index] = 1;

                            search.push([words[index], newCount, newVisited]);
                        }
                    }
                }
            }    
        } else {
            formatCount = Math.min(currentCount, formatCount);
        }

        if (search.length === 0) {
            return currentWord !== target ? 0 : formatCount;
        }
    };
}