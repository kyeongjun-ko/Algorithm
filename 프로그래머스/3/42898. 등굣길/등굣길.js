function solution(m, n, puddles) {
    const dp = [...new Array(n)].map(e => new Array(m).fill(0));

    for (let i = 0; i < puddles.length; i++) {
        [dangerCol, dangerRow] = puddles[i];
        
        dp[dangerRow - 1][dangerCol - 1] = -1;
    };
    
    dp[0][0] = 1;
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if ((row === 0 && col === 0) || dp[row][col] === -1) {
                continue;
            }

            if (row === 0) {
                if (dp[row][col - 1] === -1) {
                    continue;
                }
    
                dp[row][col] = dp[row][col - 1];
                
                continue;
            }
            
            if (col === 0) {
                if (dp[row - 1][col] === -1) {
                    continue;
                }
                
                dp[row][col] = dp[row - 1][col];

                continue;
            }
            

            if (dp[row - 1][col] === -1 || dp[row][col - 1] === -1) {
                const maxNumber = Math.max(dp[row - 1][col], dp[row][col - 1]);
                
                dp[row][col] = maxNumber === -1 ? 0 : maxNumber % 1000000007;
                
                continue;
            }
            
            dp[row][col] = (dp[row][col - 1] + dp[row - 1][col]) % 1000000007;

            continue;
        }
    }

    return dp[n - 1][m - 1];
}