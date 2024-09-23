function solution(arr) {
    let size = arr.length;
    const sum = arr.reduce((acc, cur) => acc + cur,0);
    
    return sum / size ;
}