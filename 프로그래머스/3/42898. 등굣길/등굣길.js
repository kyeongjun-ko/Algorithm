function solution(m, n, puddles) {
    const visited = new Array(n).fill([...new Array(m)].fill(0));
    console.log("visited", visited)
    const search = [ [[0,0], 0, visited] ];
    let moveCount = Infinity;

//     while (search.length !== 0) {
//         const target = search.shift();
//         console.log("target", target);
//         const [[x, y], currentCount, currentVisit] = target;
        
//         if (x !== m - 1 && currentVisit[x + 1][y] === 0) {
//             const newVisit = currentVisit[x + 1][y] = 1;
            
//             search.push([[x, y + 1], currentCount + 1, newVisit]);
//         }
        
//         if (y !== n - 1 && currentVisit[x][y + 1] === 0) {
//             const newVisit = currentVisit[x][y + 1] = 1;
            
//             search.push([[x, y + 1], currentCount + 1, newVisit]);
//         }
        
//         if (search.length === 0) {
//             moveCount = Math.min(currentCount, moveCount);
//         }
//     }
    
    console.log("moveCount", moveCount);
}