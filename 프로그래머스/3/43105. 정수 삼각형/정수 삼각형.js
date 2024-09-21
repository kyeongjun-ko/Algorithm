function solution(triangle) {
    let height = triangle.length;
    
    const list = [...new Array(height)].map(e => new Array(height).fill(0));
    
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < triangle[row].length; col++) {
            const targetNumber = triangle[row][col];
            
            if (row === 0 ) {
                list[row][col] = targetNumber
                
                continue;
            }
            
            if (col === 0) {
                list[row][col] = targetNumber + list[row - 1][col];
                
                continue;
            }
            
            if (col === row) {
                list[row][col] = targetNumber + list[row - 1][col - 1];
                
                continue;
            } 
            
            list[row][col] = targetNumber + Math.max(list[row - 1][col - 1], list[row - 1][col]);
        }
    }
    
    return Math.max(...list[height - 1]);
}