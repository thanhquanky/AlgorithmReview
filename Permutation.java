import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Permutation {
    public static void permute(String alphabet, String st, boolean[] used) {
        if (st.length() == alphabet.length()) {
            if (st.isEmpty())
                System.out.println("Null");
            else
                System.out.println(st);
            return;
        }
        for (int i=0; i<alphabet.length(); i++) {
            if (!used[i]) {
                st += alphabet.charAt(i);
                used[i] = true;
                permute(alphabet, st, used);
                used[i] = false;
                st = st.substring(0, st.length() - 1);
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();
        boolean[] marked = new boolean[input.length()];


        permute(input, "", marked);

    }
}
