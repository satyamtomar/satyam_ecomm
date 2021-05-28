package chapter3;
import java.util.Scanner;
public class Pg4
{
    public static void main(String[] args)
    {
        System.out.println("enter five integer elment");
        int[] arr=new int[5];
        Scanner input=new Scanner(System.in);
        for(int i=0;i<arr.length;i++)
        arr[i]=input.nextInt();
        System.out.println("\narry before random sorting");
        print(arr);
        for(int i=0;i<arr.length;i++)
        {
          int j=(int)(Math.random()*arr.length);
          int temp=arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
        }
        System.out.println("arry after random sorting");
        print(arr);

       
    }

 
    public static void print(int arr[])
    {
        for(int i=0;i<arr.length;i++)
        System.out.print(" "+arr[i]);
    }
}