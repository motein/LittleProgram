package ch19_Annotations.db;

import java.lang.reflect.Method;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class AtCaseTest {
	AtCase testObject = null;
	
	@Before
	public void setUp() throws Exception {
		testObject = new AtCase();
	}
	
	@Test
	public void testNoParamEchoRequest() throws Exception {
		Object result = testObject.echoRequest(); // Public Method
		System.out.println(result);
		Assert.assertNotNull(result);
	}
	
	@Test
	public void testParamEchoRequest() throws Exception {
		// Private
		Method testNoParamMethod = testObject.getClass().getDeclaredMethod("echoRequest",String.class);
		testNoParamMethod.setAccessible(true);
		Object result = testNoParamMethod.invoke(testObject, "this is a test information");  
		System.out.println(result);  
		Assert.assertNotNull(result); 
	}
}
