function solution(num_list, n) {
    for (const number of num_list) {
        if (number === n) return 1;
    }
    
    return 0;
}