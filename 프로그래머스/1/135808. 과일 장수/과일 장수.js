function solution(k, m, score) {
    const maxBoxes = score.length / m;
    const scoreMap = {};
    let accProfit = 0;
    let boxCount = 0;
    let box = [];
    
    score.forEach(e => {
        if (!scoreMap[e]) {
            scoreMap[e] = 1;
        } else {
            scoreMap[e] += 1            
        }
    });
    
    while (true) {
        if (boxCount === maxBoxes || k === -1) {
            break;
        }
        
        if (!scoreMap[k] || scoreMap[k] === 0) {
            k -= 1; 
            
            continue;
        }
        
        scoreMap[k] -= 1;
        box.push(k);

        if (box.length === m) {
            boxCount++;
            accProfit += Math.min(...box) * m;
            box.splice(0);
        }
    }
    
    return accProfit;
};