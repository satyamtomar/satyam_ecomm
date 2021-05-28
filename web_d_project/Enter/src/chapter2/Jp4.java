/**2.4 (Convert pounds into kilograms) Write a program that converts pounds
into kilograms. The program prompts the user to enter a number in pounds,
converts it to kilograms, and displays the result. One pound is 0.454
kilogram. Here is a sample run:*/
package chapter2;
import java.util.Scanner;
public class Jp4 
{
    public static void main(String[] args)
    {
        System.out.println("enter feet to pound into kilograms");
      Scanner input=new Scanner(System.in);
      double x=input.nextDouble();
      System.out.println("after covert pounds into kilograms ");
      System.out.println(x*.454);  
    }
    
}