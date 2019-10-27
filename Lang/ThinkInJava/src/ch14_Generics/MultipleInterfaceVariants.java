package ch14_Generics;

interface Payable<T> {}
class Employee implements Payable<Employee> {}
// Wrong: Erasure reduces Payable<Employee> and Payable<Hourly> to the same class
//class Hourly extends Employee implements Payable<Hourly> {} // Error: Hijack
class Hourly extends Employee implements Payable<Employee> {} // Works
class Hourly2 extends Employee {} // Works