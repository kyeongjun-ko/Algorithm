function solution(players, callings) {
    const copyPlayers = [...players];
    const playersIndex = {};
    
    players.forEach((player, index) => {
        playersIndex[player] = index;
    });
    
    callings.forEach(player => {
        const loserIndex = playersIndex[player];
        const slowerName= copyPlayers[loserIndex - 1];
        const winnerIndex = playersIndex[slowerName];
        
        playersIndex[player] -= 1;
        playersIndex[slowerName] += 1;
        
        copyPlayers[winnerIndex] = player;
        copyPlayers[loserIndex] = slowerName;
    });

    return copyPlayers;
}