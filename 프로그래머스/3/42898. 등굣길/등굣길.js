function solution(m, n, puddles) {
    const dp = [...new Array(n)].map(e => new Array(m).fill(0));

    for (let i = 0; i < puddles.length; i++) {
        [dangerCol, dangerRow] = puddles[i];
        
        dp[dangerRow - 1][dangerCol - 1] = -1;
    };
    
    dp[0][0] = 1;
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            let path = dp[row][col];
            if (path === -1) continue;
            
            if (row - 1 >= 0 && dp[row - 1][col] !== -1) path += dp[row - 1][col];
            if (col - 1 >= 0 && dp[row][col - 1] !== -1) path += dp[row][col - 1];
            
            dp[row][col] = path % 1000000007;
        }
    }

    return dp[n-1][m-1];
}