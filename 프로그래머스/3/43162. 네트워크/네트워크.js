function solution(n, computers) {
    let visited = [false];
    let answer = 0;
    
    const dfs = index => {
        visited[index] = true;

        for(let j = 0; j < computers[index].length; j++) {
            if(computers[index][j] === 1 && !visited[j]){
                dfs(j);
            }
        }
    }
    
    for (let i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i);
            
            answer++;
        }
    }
    
    return answer
}
