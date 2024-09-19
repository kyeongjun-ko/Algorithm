function solution(s) { 
    let targetString = s;
    let count = 0;
    let removeCount = 0;
    
    const formatToBinay = (number) => {
        let target = number.length;
        let binary = "";
        
        while(target !== 0) {
            const remainder = target % 2;
            const quotient = Math.floor(target / 2);
            
            target = quotient;
            binary += remainder;
        }
        
        return binary;
    };
    
    while(targetString !== "1") {
        const removeZero = [...targetString].filter(e => {
            if (e !== "0") {
                return true;
            }
            
            removeCount++;
            
            return false;
        }).join("");

        count++;
        
        targetString = formatToBinay(removeZero).toString();
    };
    
    return [count, removeCount];
}