import java.util.Scanner;
public class Pg5 {
    public static void main(String[] args)
    {
        Scanner input =new Scanner(System.in);
        System.out.println("enter no. of element for sum");
        int n=input.nextInt();
        int i,sum=0;
        for(i=1;i<=n;i++)
        {
            if(i==1)
            System.out.print(" "+i);
            else
            System.out.print("+"+i);
            sum=sum+i;
        }
        System.out.println("\n the sum of this above siers is "+sum);


        
    }
    
}