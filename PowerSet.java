import java.util.ArrayList;
import java.util.Scanner;
/**
 * Created by thanhquanky on 10/20/14.
 */
public class PowerSet {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();
        boolean[] marked = new boolean[input.length()];

        ArrayList<String> combinations = Combination.combination(input);

        for (String st: combinations) {
            Permutation.permute(st, "", new boolean[st.length()]);
        }
    }
}
