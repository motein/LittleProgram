package ch19_Annotations;

import org.junit.jupiter.api.Test;

public class Testable {
	public void execute() {
		System.out.println("Executing");
	}
	
	@Test
	void testExecute() { execute(); }
}
