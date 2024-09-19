function solution(s) {
    const stringList = s.split(" ");
    const result = [];
    
    for (const word of stringList) {
        const target = [...word];

        const turnToJaden = target.map((e, index) => {
            if (index === 0 && isNaN(e)) {
                return e.toUpperCase();
            }

            return e.toLowerCase();
        })
        
        result.push(turnToJaden.join(""));
    }
    
    return result.join(" ")
}