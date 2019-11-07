package ch16_ContainersInDepth;

public class CountingGenerator {
	
	static char[] chars = ("abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ").toCharArray();
	public static class Character implements Generator<java.lang.Character> {
		int index = -1;
		public java.lang.Character next() {
			index = (index + 1) % chars.length;
			return chars[index];
		}
	}
	
	public static class String implements Generator<java.lang.String> {
		private int length = 7;
		Generator<java.lang.Character> cg = new Character();
		public String() {}
		public String(int length) { this.length = length; }
		public java.lang.String next() {
			char[] buf = new char[length];
			for (int i = 0; i < length; i++) {
				buf[i] = cg.next();
			}
			
			return new java.lang.String(buf);
		}
	}
}
