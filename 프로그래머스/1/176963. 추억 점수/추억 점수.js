function solution(name, yearning, photo) {
    const result = [];
    // 일단 주어진 이름과 점수를 매칭시켜 객체를 만들자
    const yearningMap = {};
    
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
    
    photo.forEach(e => {
        let count = 0;
        
        for (const name of e) {
            if (yearningMap[name]) {
                count += yearningMap[name];
            }
        }
        
        result.push(count);
    })
    
    return result;
}