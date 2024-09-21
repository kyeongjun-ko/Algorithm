function solution(triangle) {
    var answer = 0;
    const list = [...new Array(5)].map(e => new Array(5).fill(0));
    console.log("list", list);
    
    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            console.log("triangle", i,j,triangle[i][j])
        }
    }
}