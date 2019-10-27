package ch14_Generics;

import java.util.List;

public class UseList<W,T> {
//	void f(List<T> v) {}
//	void f(List<W> v) {} // Compiler Error
	
	void f1(List<T> v) {} // In this way
	void f2(List<W> v) {}
}
