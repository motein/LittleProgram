package ch21;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class Button2 extends JFrame {
	
	private JButton b1 = new JButton("Button1"), b2 = new JButton("Button2");
	private JTextField txt = new JTextField(10);
	
	class ButtonListener implements ActionListener {
		public void actionPerformed(ActionEvent e) {
			String name = ((JButton)e.getSource()).getText();
			txt.setText(name);
		}
	}
	
	private ButtonListener bl = new ButtonListener();
	public Button2() {
		b1.addActionListener(bl);
		b2.addActionListener(bl);
		setLayout(new FlowLayout());
		add(b1);
		add(b2);
		add(txt);
	}

	public static void main(String[] args) {
		SwingConsole.run(new Button2(), 200, 100);
	}

}
