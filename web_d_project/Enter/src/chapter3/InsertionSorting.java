package chapter3;

// Java program for implementation of Insertion Sort 
class InsertionSort { 
	/*Function to sort array using insertion sort*/
	void sort(int arr[],int count) 
	{ 
           
        int n = arr.length;
        for (int i = 1; i <count; ++i) { 
            int key = arr[i]; 
            int j = i - 1; 
  
            /* Move elements of arr[0..i-1], that are 
               greater than key, to one position ahead 
               of their current position */
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
        count++;
        printArray(arr); 
        sort(arr,count);
    }

	/* A utility function to print array of size n*/
	static void printArray(int arr[]) 
	{ 
		int n = arr.length; 
		for (int i = 0; i < n; ++i) 
			System.out.print(arr[i] + " "); 

		System.out.println(); 
	} 

	// Driver method 
	public static void main(String args[]) 
	{ 
        
		int arr[] = { 3,2,1,}; 
        int count=2;
		InsertionSort ob = new InsertionSort(); 
		ob.sort(arr,count); 

		printArray(arr);
	} 
} /* This code is contributed by Rajat Mishra. */
