package ch16_ContainersInDepth;

import java.util.Collections;
import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetDemo {

	public static void main(String[] args) {
		SortedSet<String> sortedSet = new TreeSet<String>();
		Collections.addAll(sortedSet, "one two three four five six seven eight".split(" "));
		System.out.println(sortedSet);
		System.out.println(sortedSet.first());
		System.out.println(sortedSet.last());
	}

}
