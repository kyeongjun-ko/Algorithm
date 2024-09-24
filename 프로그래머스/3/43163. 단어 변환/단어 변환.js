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
            console.log("temp", temp);
            
            if (currentWord !== target) {
                return 0
            }
            
            return formatCount;
        }
    };

    /* basic case를 생각해보자. 
    1. 일단 한번의 하나의 알파벳만 바꿀수 있다.
    2. 일단 주어진 인자와 타겟의 인자를 비교해서
    3. 바꿔야하는 인덱스만 찾아보자. 예를들어 1, 3이라고한다면
    4. 첫번째 인덱스를 바꿨을때 
    hit을 cog로 바꿔야한다. 0,1,2 다바꿔야한다.
    그럼 hit중에 하나를 바꿔야하는데
    h만 바꿀수있는게 없으니까 다음으로 넘어간다.
    i로 넘어간다. i를 바꿀수있는게 hot이랑 dot이 있다.
    그럼 hot이랑 dot중에서 다시 비교해본다.
    hot에서 h랑 t를 바꿔야하는데 lot이랑 dot으로 바꿀수가 있다.
    그리고 lot에서 다시 l을 d로 바꿔야하는데 hot은 했으니까 넘어가고
    dot으로 바꾼다. dot에서 d랑 T를 바꿔야하는데
    이미 dot이랑 lot은 바꿨으니까 t를바꿔야하는데
    t는 dog로 바꿀수가있다. dog가된다.
    이제 d를 바꾸기만하면된다. d는 dog에서 d를 바꿀수있는게 있나
    봤더니 cog로 바꿀수있다.
    
    0,1,2 를 바꿔야한다면은 1,2와 동일하면서 0만다른게 있는지 찾아본다.
    만약에 1,2와 동일한게 없으면은 0,2 와동일한게 있는지 찾아본다.
    만약에 0,2와 동일한게 없으면은 0,1 와 동일한게 있는지 찾아본다.
    만약에 동일한게 있으면은 그거를 바꿀수있는 문자열로 다시 바꾸고 재귀함수를 다시실행한다.
    
    그러면은 다시 함수를 실행할때 serach배열도 같이 전달해야할것같다. 
    Serach 배열이 0이면서 동일한 문자가 있는지를 찾아봐야한다.
    그리고 바꾸면은 바꾼 숫자를 1늘려주고, 다시 전달한다.
    
    만들어야하는 함수.
    두개의 문자열이 동일한지 판별하는 함수
    그리고 search 배열과, 바꾼 횟수를 전달받은 함수
    */
}