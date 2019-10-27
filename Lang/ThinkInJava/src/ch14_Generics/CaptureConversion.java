package ch14_Generics;

import java.util.ArrayList;

public class CaptureConversion {

	static <T> void f1(ArrayList<T> holder) {
		T t = holder.get(0);
		System.out.println(t.getClass().getSimpleName());
	}
	
	static void f2(ArrayList<?> holder) {
		f1(holder);
	}
	
	public static void main(String[] args) {
		ArrayList raw = new ArrayList<Integer>();
		raw.add(1);
		f1(raw);
		f2(raw);
		
		ArrayList rawBasic = new ArrayList();
		rawBasic.set(0, new Object()); // Warning
		f2(rawBasic); // No Warning
		
		// Upcast
		ArrayList<?> wildcarded = new ArrayList<Double>();
//		wildcarded.add(new Object());
//		f2(wildcarded);
	}

}
