package ch14_Generics;

import static ch14_Generics.Tuple.*;

public class TupleTest {
	
	static TwoTuple<String, Integer> f() {
		return tuple("hi", 47);
	}

	public static void main(String[] args) {
		System.out.println(f());
	}

}
