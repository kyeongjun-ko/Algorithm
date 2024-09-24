const dropIndexOfString = (word, index) => {
    return [...word].filter((_, i) => i !== index).join("");
}

const compareDropString = (droppedWord, index, wordList) => {
    const indexList = [];
    let comparable = false;
        
    for (let i = 0; i < wordList.length; i++) {
        const droppedFromWords = dropIndexOfString(wordList[i], index);

        if (droppedWord === droppedFromWords) {
            comparable = true;

            indexList.push(i);
        }
    }

    return [comparable, indexList];
}

function solution(begin, target, words) {
    let formatCount = Infinity;
    const visited = [...words].map(e => 0);
    const a = [[begin, 0, visited]];
    let temp;
        
    while (a.length !== 0) {
        const compareTarget = a.shift();
        temp = compareTarget;
        
        const [currentWord, currentCount, visitList] = compareTarget;

        if (currentWord !== target) {
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] !== target[i]) {
                    const targetWord = dropIndexOfString(currentWord, i);

                    const [comparable, indexList] = compareDropString(targetWord, i, words);

                    if (!comparable) {
                        continue;
                    }

                    for (const index of indexList) {
                        if (visitList[index] === 0) {
                            const newVisited = visitList.slice();
                            const newCount = currentCount + 1;
                            
                            newVisited[index] = 1;

                            a.push([words[index], newCount, newVisited]);
                        }
                    }
                }
            }    
        }

        if (currentWord === target) {
            if (currentCount < formatCount) {
                formatCount = currentCount;
            }
        }

        if (a.length === 0) {
            if (currentWord !== target) {
                return 0
            }
            
            return formatCount;
        } 
    };
}