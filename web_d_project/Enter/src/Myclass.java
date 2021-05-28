import java.util.Scanner;
public class Myclass {
     
    public static void main(String[] arg )
	{
	System.out.println("plz enter total second");
	Scanner input = new Scanner(System.in);
    System.out.println("enter the second to convert into mint.");
    int sec = input.nextInt();
    int x = sec/60;
    int x1=sec%60;
    System.out.println("mintes"+x+":"+x1);
    final int XY=45;
    System.out.println("1.0F / 3.0F is " + 1.0F / 3.0F);

    System.out.println(XY);
    


    
    }
}