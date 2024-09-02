function solution(k, d) {
    let count = 0;
    
    for (let x = 0; x <= d; x += k) {
        let y = parseInt(Math.sqrt(d**2 - x**2));
        
        count += parseInt(y / k) + 1;
    }

    return count;
}