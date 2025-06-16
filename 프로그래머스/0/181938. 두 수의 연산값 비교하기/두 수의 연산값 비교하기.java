class Solution {
    public int solution(int a, int b) {
        // a ⊕ b: 두 정수를 붙여서 쓴 값
        String concatenated = String.valueOf(a) + String.valueOf(b);
        int concatenatedValue = Integer.parseInt(concatenated);
        
        // 2 * a * b
        int multipliedValue = 2 * a * b;
        
        // 더 큰 값을 반환 (같으면 concatenatedValue 반환)
        if (concatenatedValue >= multipliedValue) {
            return concatenatedValue;
        } else {
            return multipliedValue;
        }
    }
}