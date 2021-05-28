package chapter3;
import java.util.*;
import java.lang.*;
import java.io.*;
public class Card {
    public static void main (String[] args) {
		
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		for(int i=0;i<t;i++)
		{
		    int n=sc.nextInt();
		    Queue<Integer> q=new LinkedList<Integer>();
		    for(int j=0;j<n;j++)
		    {
		        q.add(j+1);
		    }
		    int count=1;
		    int a[]=new int[n];
		    while(q.size()>1)
		    {
		        int sum=0;
		        while(sum<count)
		        {
		            q.add(q.remove());
		            sum++;
		        }
		        //System.out.print(q.remove()+" ");
		        a[q.remove()-1]=count;
		        count++;
		    }
		    //System.out.println(q.remove());
		    a[q.remove()-1]=count;
		    for(int j=0;j<n;j++)
		    {
		        System.out.print(a[j]+" ");
		    }
		    System.out.println("\n5");
		}
	}
    
}