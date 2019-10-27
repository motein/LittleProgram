package ch14_Generics;

import java.util.ArrayList;
import java.util.Arrays;

public class ErasedTypeEquivalence {
	public static void main(String[] args) {
		Class c1 = new ArrayList<String>().getClass();
		Class c2 = new ArrayList<Integer>().getClass();
		
		System.out.println(c1 == c2); // True
		System.out.println(Arrays.toString(c1.getTypeParameters())); // E
		System.out.println(Arrays.toString(c2.getTypeParameters())); // E
	}
}
