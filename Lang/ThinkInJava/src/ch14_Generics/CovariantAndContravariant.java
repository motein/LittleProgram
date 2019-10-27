package ch14_Generics;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CovariantAndContravariant {
	private static List<Double> fList = Arrays.asList(1.0,2.0,3.0);
	
    public static Number intSum(List<? extends Number> l) {
        int sum = 0;
        for (Number n : l) {
            sum += n.intValue();
        }
        return sum;
    }

    public static void forEach(List<? super Number> consumer) {
        for (double x : fList) {
        	System.out.println(x);
            consumer.add(x);
        }
    }
	
	public static void main(String[] args) {
		System.out.println(intSum(fList));
		List<Number> addList = new ArrayList<Number>();
        forEach(addList);
	}
}
