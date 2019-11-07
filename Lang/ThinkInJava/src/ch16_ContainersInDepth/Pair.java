package ch16_ContainersInDepth;

public class Pair<K,V> {
	public final K key; // Read-only
	public final V value;
	public Pair(K k, V v) {
		key = k;
		value = v;
	}
}
