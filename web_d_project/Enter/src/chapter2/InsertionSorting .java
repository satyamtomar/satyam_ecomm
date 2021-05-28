package chapter2;


class InsertionSort { 

	void sort(int arr[],int count) 
	{ 
        if(count>=0){      
        int n = arr.length;
        for (int i =n-2; i>=count;--i) { 
            int key = arr[i]; 
            int j = i+1; 
  
            
            while (j<=n-1&& arr[j]<key) { 
                arr[j-1] = arr[j]; 
                j = j+1; 
			} 
			if(j-1>=0)
            arr[j-1] = key; 
        }
        count--;
        printArray(arr); 
		sort(arr,count);
	}
    }
	static void printArray(int arr[]) 
	{ 
		int n = arr.length; 
		for (int i = 0; i < n; ++i) 
			System.out.print(arr[i] + " "); 

		System.out.println(); 
	} 


	public static void main(String args[]) 
	{ 
        
		int arr[] = { 5,4,3,2,1,}; 
        int count=arr.length-1;
		InsertionSort ob = new InsertionSort(); 
		ob.sort(arr,count); 

		printArray(arr);
	} 
} 
