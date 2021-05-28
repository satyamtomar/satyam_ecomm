
import java.util.Scanner;
public class Area
{
    public static void main(String[] args)
    { 
        Scanner input =new Scanner(System.in);
        System.out.println("enter the radius of circle");
        double r=input.nextDouble();
        double area,pi=3.14;
        if(r>0)
        {
            area=r*r*pi;
            System.out.println("Area of cricle is "+area);
        }
        else{
            System.out.println("please enter valid radius");
        }
        System.out.println(pi);
        
    }

    
}