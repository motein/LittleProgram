package ch14_Generics;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Pet {}
class Cat extends Pet {}
class Dog extends Pet {}

public class CheckedList {
	static void oldStyleMethod(List probablyDogs) {
		probablyDogs.add(new Cat());
	}

	public static void main(String[] args) {
		List<Dog> dogs1 = new ArrayList<Dog>();
		oldStyleMethod(dogs1);
		List<Dog> dogs2 = Collections.checkedList(new ArrayList<Dog>(), Dog.class);
		try {
			oldStyleMethod(dogs2);
		} catch (Exception e) {
			System.err.println(e);
		}
		// Derived types work fine
		List<Pet> pets = Collections.checkedList(new ArrayList<Pet>(), Pet.class);
		pets.add(new Dog());
		pets.add(new Cat());
	}
}
