package ch19_Annotations.db;

public @interface Uniqueness {
	Constraints constraints() default @Constraints(unique=true);
}
