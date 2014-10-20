import java.util.ArrayList;
import java.util.Scanner;

/**
 * Created by thanhquanky on 10/20/14.
 */
public class Combination {
    public static boolean isBitSet(int num, int k) {
        if (((num >> k) & (1)) == 1)
            return true;
        return false;
    }

    public static String findCombination(String st, int k) {
        int length = st.length();
        String out = "";
        for (int i=0; i<length; i++) {
            if (isBitSet(k, i))
                out+=st.charAt(i);
        }
        return out;
    }

    public static ArrayList<String> combination(String alphabet) {
        int k = 1 << alphabet.length();
        ArrayList<String> combinations = new ArrayList<String>();
        for (int i=0; i<k; i++) {
            combinations.add(findCombination(alphabet, i));
        }
        return combinations;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();
        boolean[] marked = new boolean[input.length()];

        ArrayList<String> combinations = combination(input);

        for (String st: combinations) {
            System.out.println("Combination: " + st);
        }
    }
}
