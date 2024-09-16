function solution(A,B){
    let result = 0;
    const deepCopyA = [...A];
    const deepCopyB = [...B];
    
    const sortedListA = deepCopyA.sort((a, b) => a - b);
    const sortedListB = deepCopyB.sort((a, b) => b - a);
    
    for (let i = 0; i < A.length; i++) {
        result += sortedListA[i] * sortedListB[i]
    }
    
    return result;
}