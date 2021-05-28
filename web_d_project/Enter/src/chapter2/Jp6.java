
package chapter2;
import java.util.Scanner;
/**2.5 (Financial application: calculate tips) Write a program that reads the
subtotal and the gratuity rate, then computes the gratuity and total. For
example, if the user enters 10 for subtotal and 15% for gratuity rate, the
program displays $1.5 as gratuity and $11.5 as total. Here8*/
public class Jp6
{
 public static void main(String[] args)
 {
    System.out.println("Enter the subtotal and a gratuity rate");
    Scanner input=new Scanner(System.in);
    double sub=input.nextDouble();
    double rate=input.nextDouble();
    double x=(rate*sub)/100;
    System.out.println("gratuity :"+x+" subtotal :"+(sub+x)); 
 }         
    

}