function solution(friends, gifts) {
    var answer = 0;
    const giftMap = {}
    
    friends.forEach(name => {
        giftMap[name] = {
            friends: {},
            gived: 0,
            recieved: 0,
            gift: 0,
        }
    })
    
    gifts.forEach(e => {
        const [givenFriend, recievedFriend] = e.split(" ");
        
        giftMap[givenFriend].gived += 1;
        giftMap[recievedFriend].recieved += 1;
        
        if (giftMap[givenFriend].friends.hasOwnProperty(recievedFriend)) {
            giftMap[givenFriend].friends[recievedFriend] += 1;
        } else {
            giftMap[givenFriend].friends[recievedFriend] = 1;
        }
    })
    
    const getGiftScore = (friend) => {
        return giftMap[friend].gived - giftMap[friend].recieved;
    }
    
    const compareScore = (friend1, friend2) => {
        if (giftMap[friend1].friends[friend2] ||
            giftMap[friend2].friends[friend1]
        ) {
            if (!giftMap[friend1].friends[friend2]) {
                giftMap[friend2].gift += 1;
                
                return;
            }
            
            if (!giftMap[friend2].friends[friend1]) {
                giftMap[friend1].gift += 1;
                
                return;
            }
            
            if (giftMap[friend1].friends[friend2] > giftMap[friend2].friends[friend1]) {
                giftMap[friend1].gift += 1;
                
                return;
            }
            
            if (giftMap[friend1].friends[friend2] < giftMap[friend2].friends[friend1]) {
                giftMap[friend2].gift += 1;
                
                return;
            }
            
            if (giftMap[friend1].friends[friend2] = giftMap[friend2].friends[friend1]) {
                if (getGiftScore(friend1) === getGiftScore(friend2)) return; 
                
                if (getGiftScore(friend1) > getGiftScore(friend2)) {
                   giftMap[friend1].gift += 1;
                }
                
                if (getGiftScore(friend1) < getGiftScore(friend2)) {
                    giftMap[friend2].gift += 1;
                }
            }
        } else {
            if (getGiftScore(friend1) === getGiftScore(friend2)) return; 
            
            if (getGiftScore(friend1) > getGiftScore(friend2)) {
                giftMap[friend1].gift += 1;
            }
                
            if (getGiftScore(friend1) < getGiftScore(friend2)) {
                giftMap[friend2].gift += 1;
            }
        }    
    };
    
    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            compareScore(friends[i], friends[j]);
        }
    }
    
    Object.values(giftMap).map(e => {
        if (answer < e.gift) {
            answer = e.gift;
        }
    })
    
    return answer;
}