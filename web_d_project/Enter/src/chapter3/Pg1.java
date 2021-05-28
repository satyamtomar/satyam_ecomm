package chapter3;
import java.util.Scanner;
public class Pg1
{
    public static void main(String[] args) 
    {
        
        System.out.println("Enter today’s day of week");
        java.util.Scanner input=new Scanner(System.in);
        int days=input.nextInt();
        System.out.println("Enter the number of days elapsed since today:");
        int year=input.nextInt();
        System.out.print("today day:  ");kuchbhi(days);
        System.out.print("  futurw day:  ");kuchbhi((days+year)%7);
         
        
    }
    public static void kuchbhi(int a)
    {
        switch(a)
        { 
        case 0:System.out.println("sunday");
        break;
        case 1:System.out.println("monday");
        break;
        case 2:System.out.println("tues");
        break;
        case 3:System.out.println("wed");
        break;
        case 4:System.out.println("thu");
        break;
        case 5:System.out.println("fri");
        break;
        case 6:System.out.println("sat");
        break;
        default:System.out.println("enter the vaild input");
        }    
    }

}