package ch14_Generics;

import java.util.List;

public class PECS {

//	public static void foo(List<? extends Number> l){ // 限制set
//        l.add(new Integer(2));  // 编译通过么？ Why ?
//	}  
  
    public static void bar(List<? super Number> l){  
        l.add(new Integer(2));  // 编译通过么？ Why ?  
        l.add(new Float(2));    // ok?
    }
    
//    public static void test(List<? super Number> list) { // 限制get
//        Number n = list.get(0);             // 编译错误  
//        Object o = list.get(0);             // OK  
//  
//        list.set(0, new Object());      // 编译错误
//        list.set(0, new Long(0));       // OK
//        list.set(0, new Integer(0));    // OK
//    }  
    
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
