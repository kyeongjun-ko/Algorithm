function solution(bandage, health, attacks) {
    const battleTime = attacks[attacks.length - 1][0];
    const [delay, secHeal, succHeal] = bandage;
    const attackMap = {};
    let hp = health;
    let success = 0; 
    
    attacks.forEach(e => {
        const [time, damege] = e;
        
        attackMap[time] = damege;
    })
    
    for (let time = 0; time <= battleTime; time++) {
        if (attackMap.hasOwnProperty(time)) {
            hp -= attackMap[time];
            success = 0;
            
           if (hp <= 0) return -1;
        }
        
        while (!attackMap.hasOwnProperty(time) && hp < health) {
            success += 1;
            
            if (success === delay) {
                const heal = secHeal + succHeal;
                
                if (hp + heal > health) {
                    hp = health;
                } else {
                    hp = hp + heal;
                }
                
                success = 0;
                
                break;
            }
            
            if ((hp + secHeal) > health) {
                hp = health;
            } else {
                hp += secHeal;
            }

            break;
        }
    }
    
    if (hp <= 0) {
        return -1;
    }
    
    return hp;
}