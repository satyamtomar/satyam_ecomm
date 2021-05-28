package chapter2;
import java.util.Scanner;
public class Jp7
{
   public static void main(String[] args) 
   {
       
       Scanner input=new Scanner(System.in);
       long x=input.nextLong();
       double day=x/(60*24);
       double year= x/(60*24*365);
       System.out.println("number of days is");
       System.out.println(Math.round(year)); 
       double yo=Math.round(year);
       System.out.println("number of days is"+day%365);
       String s=input.next();
      String y="sh";
      int z =s.indexOf(y);
      System.out.println(z);
      int com=s.compareTo(y);
   }
    
}