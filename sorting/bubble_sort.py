# in bubble sort there can be two types of result one is accending and another is decending by changing > & < we can achive this 

def bubble_sort(arr):
    n=len(arr)
    for i in range(n-1,0,-1):
        for j in range(0,i):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
    return arr     

def print_array(arr):
    for val in arr:
        print(val)

if __name__ == "__main__":
    arr = [64, 25, 12, 22, 18]
    # [ 25, 12, 22, 18,64]
    print("Original array: ", end="")
    print_array(arr)
    bubble_sort(arr)
    print("Sorted array: ", end="")
    print_array(arr)