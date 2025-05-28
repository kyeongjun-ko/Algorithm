import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        int length = a.length();
        String result = "";
        
        for (int i = 0; i < length; i++) {
            char ch = a.charAt(i);
            
            if (Character.isUpperCase(ch)) {
                result += Character.toLowerCase(ch);
            } else {
                result += Character.toUpperCase(ch);
            }
        }
        
        System.out.print(result);
    }
}