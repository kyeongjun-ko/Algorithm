function solution(k, m, score) {
    let result = 0;
    let boxCount = 0;
    let box = [];
    const boxes = score.length / m;
    const sortedScore = score.sort((a, b) => b - a);
    
    const scoreMap = {};
    
    
    for (let i = 1; i <= k; i++) {
        scoreMap[i] = 0;
    }
    
    score.forEach(e => scoreMap[e] += 1);
    
    
    let maxFruit = k;
    
    while (true) {
        if (boxCount === boxes || k === -1) {
            break;
        }
        
        if (!scoreMap[k]) {
            k -= 1; 
            
            continue;
        }
        
        if (scoreMap[k] === 0) {
            delete scoreMap[k];
            k -= 1; 
            
            continue;
        }
        
        scoreMap[k] -= 1;
        box.push(k);

        if (box.length === m) {
            boxCount++;
            result += Math.min(...box) * m;
            box = [];
        }
    }
    
    return result;
};