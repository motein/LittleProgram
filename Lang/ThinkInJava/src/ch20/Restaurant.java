package ch20;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class Meal {
	private final int orderNum;
	public Meal(int orderNum) { this.orderNum = orderNum; }
	public String toString() { return "Meal " + orderNum; }
}

class WaitPerson implements Runnable {

	private Restaurant  restaurant;
	public WaitPerson(Restaurant r) { this.restaurant = r; }
	@Override
	public void run() {
		try {
			while (!Thread.interrupted()) {
				synchronized(this) {
					while(this.restaurant.meal == null)
						wait(); // for the chef to produce a meal
				}
				
				System.out.println("Waitperson got " + this.restaurant.meal);
				synchronized(this.restaurant.chef) {
					this.restaurant.meal = null;
					this.restaurant.chef.notifyAll();
				}
			}
		} catch (InterruptedException e) {
			System.out.println("Waitperson interrupted");
		}
	}
}

class Chef implements Runnable {

	private Restaurant  restaurant;
	private int count = 0;
	public Chef(Restaurant r) { this.restaurant = r; }
	@Override
	public void run() {
		try {
			while (!Thread.interrupted()) {
				synchronized(this) {
					while(this.restaurant.meal != null)
						wait(); // for the meal to be taken
				}
				
				if (++count == 10) {
					System.out.println("Out of food, closing");
					this.restaurant.exec.shutdownNow();
				}
				
				System.out.println("Order up!");
				synchronized(this.restaurant.waitPerson) {
					this.restaurant.meal = new Meal(count);
					this.restaurant.waitPerson.notifyAll();
				}
				TimeUnit.MILLISECONDS.sleep(100);
			}
		} catch (InterruptedException e) {
			System.out.println("Chef interrupted");
		}
	}
}

public class Restaurant {
	Meal meal;
	ExecutorService exec = Executors.newCachedThreadPool();
	WaitPerson waitPerson = new WaitPerson(this);
	Chef chef = new Chef(this);
	
	public Restaurant() {
		exec.execute(chef);
		exec.execute(waitPerson);
	}
	public static void main(String[] args) {
		new Restaurant();
	}

}
