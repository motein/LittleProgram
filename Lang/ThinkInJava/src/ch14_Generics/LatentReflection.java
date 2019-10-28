package ch14_Generics;

import java.lang.reflect.Method;

class Mime {
	public void sit() { System.out.println("Pretending to sit"); }
	public String toString() { return "Mime"; }
}

class SmartDog {
	public void speak() { System.out.println("Woof"); }
	public void sit() { System.out.println("Sitting"); }
}

class CommunicateReflectively {
	public static void perform(Object speaker) {
		Class<?> spkr = speaker.getClass();
		
		try {
			try {
				Method speak = spkr.getMethod("speak");
				speak.invoke(speaker);
			} catch (NoSuchMethodException e) {
				System.err.println(speaker + " cannot speak");
			}
			
			try {
				Method sit = spkr.getMethod("sit");
				sit.invoke(speaker);
			} catch (NoSuchMethodException e) {
				System.err.println(speaker + " cannot sit");
			}
		} catch (Exception e) {
			throw new RuntimeException(speaker.toString(), e);
		}
	}
}

public class LatentReflection {
	public static void main(String[] args) {
		CommunicateReflectively.perform(new SmartDog());
		CommunicateReflectively.perform(new Mime());
	}
}
