package chapter2;

import java.util.Scanner;

public class jP8 
{
    public static void main(String[] args)
    {
        Scanner input=new Scanner(System.in); 
        int n =input.nextInt();  
        long totalmili=System.currentTimeMillis();
        long totalsec=totalmili/100;
        long currentsec=totalsec%60;
        long totalmint=totalsec/60;
        long currentmint=totalmint%60;
        long totalhour=totalmint/24;
        long currenhour=totalhour%24;
        System.out.println("the curren is "+currenhour+":"+currentmint+":"+currentsec);
        int[] aryy={1,2,2,4,44};
        aryy[0]=input.nextInt();
        

    
    }

    
}
