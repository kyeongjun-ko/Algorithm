function solution(players, callings) {
    const playersIndex = {};
    
    players.forEach((player, index) => {
        playersIndex[player] = index;
    });
    
    // const playersIndex = players.reduce((acc, cur, index) => {
    //     return {...acc, [cur]: index}
    // }, {});
    
    const copyPlayers = [...players];
    
    callings.forEach(player => {
        const passIndex = playersIndex[player];
        const passedName= copyPlayers[passIndex - 1];
        const passedIndex = playersIndex[passedName];
        
        playersIndex[player] -= 1;
        playersIndex[passedName] += 1;
        
        copyPlayers[passedIndex] = player;
        copyPlayers[passIndex] = passedName;
    });

    
    return copyPlayers;
}