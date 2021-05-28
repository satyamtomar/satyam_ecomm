package chapter2;
import java.util.Scanner;
public class Jp2
{

    public static void main(String[] args) 
    {
          
      System.out.println("enter hight and radiu of cylinder ");
      Scanner input =new Scanner(System.in);
      System.out.println("radius");
       double r=input.nextDouble();
       System.out.println("enter hight");
       double h=input.nextDouble();

       double area=r*r*3.14;
       System.out.println("area of cylinder is "+area);
       System.out.println("volume of cylinder is "+area*h);
     }
}
