package ch19_Annotations.db;

public class AtCase {
	private String echoRequest(String request) {
		return "Hello " + request;
	}
	
	public String echoRequest() {
		return "Hello";
	}
}
