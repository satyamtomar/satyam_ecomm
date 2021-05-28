/*2.6 (Sum the digits in an integer) Write a program that reads an integer
between 0 and 1000 and adds all the digits in the integer. For example, if an
integer is 932, the sum of all its digits is 14.
Hint: Use the % operator to extract digits, and use the / operator to remove
the extracted digit. For instance, 932 % 10 = 2 and 932 / 10 = 93. */
package chapter2;
import java.lang.Math;
import java.util.Scanner;
public class Jp5
{
    public static void main(String[] args) 
    {
        int x=(int)(Math.random()*1000);
        System.out.println("random number is "+x);
        int sum=0,temp=x;
        while (temp!=0)
        {
            sum=sum+temp%10;
            temp=temp/10;
        }
        System.out.println("sum of all digits of random "+sum);
    }
      
}