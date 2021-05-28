package chapter3;
import java.util.Scanner;
public class Pg2
{
    public static void main(String[] args)
    {
        Scanner input=new Scanner(System.in);
        System.out.println("enter weight in pound ");
        double w=input.nextDouble();
        System.out.println("enter hight in feet");
        double f=input.nextDouble();
        double kw=w*.45359237;
        double fm=f*.3048;
        double bmi=kw/(fm*fm);
         System.out.println("BMI is " + bmi);
         if (bmi < 18.5)
         System.out.println("Underweight");
          else if (bmi < 25)
          System.out.println("Normal");
          else if (bmi < 30)
           System.out.println("Overweight");
         else
         System.out.println("Obese");

    }

        
        
}
    
