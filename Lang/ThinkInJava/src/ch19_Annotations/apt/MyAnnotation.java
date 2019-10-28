package ch19_Annotations.apt;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE) // For class, interface ...
@Retention(RetentionPolicy.SOURCE) // Reserve until compiling time
public @interface MyAnnotation { }
