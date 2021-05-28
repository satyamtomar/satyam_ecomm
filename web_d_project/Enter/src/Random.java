import java.util.Scanner;
public class Random 
{
     public static void main(String[] arg)
     {
        Scanner input=new Scanner(System.in);
         while (true)
         {   
             System.out.println("for stop enter 0 and for contin. press any thing");
             int code=input.nextInt();
             if(code==0)
             {
                System.out.println("thanks for answering ");
                 break;
             }  else{
                     
                     int a=(int)(Math.random()*100);
                      int b=(int)(Math.random()*100);
                        int c=a+b;
                        System.out.println("please answer this expression  "+a+"+"+b);
                       int ans=input.nextInt();
                         if(c==ans)
                        {
                           System.out.println("your answer is correct");
                          }     else{
                              System.out.println("try next time");
                     }

                }       
         }
      }    
    
    
}