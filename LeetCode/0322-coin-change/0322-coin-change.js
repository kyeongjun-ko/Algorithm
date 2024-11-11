/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
서로 다른 액면가의 동전을 나타내는 정수 배열의 동전과 총 금액을 나타내는 정수가 주어집니다. 그 금액을 구성하는 데 필요한 동전의 개수가 가장 적은 것을 반환합니다. 동전의 어떤 조합으로도 해당 금액을 만들 수 없으면 -1을 반환합니다. 각 종류의 동전이 무한히 많다고 가정해도 됩니다.
*/



var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === amount + 1 ? -1 : dp[amount];

};