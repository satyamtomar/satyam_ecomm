package chapter2;
import java.util.Scanner;
public class Jp1
{
    public static void main(String[] args) 
    {
        System.out.println("enter temperature in celsius degree");
        Scanner tem =new Scanner(System.in);
        double x=tem.nextDouble();
        double y=1.8*x+32;
        System.out.println("y");

        System.out.println("after convert tem. into  celsius to fahrenheit is "+y);

    }
    
}