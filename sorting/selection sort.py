# define the main funciton 
# first select the minimum element in the unsorted array and swap with the i index of element . 
def selection_sort(arr):
    n=len(arr)
    for i in range (0 , n-1):
        mei=i
        for j in range(i+1,n):
            if arr[j]<arr[mei]:
                mei=j
        arr[i],arr[mei]=arr[mei],arr[i]
    return arr;

def print_array(arr):
    for val in arr:
        print(val)

if __name__ == "__main__":
    arr = [64, 25, 12, 22, 18]
    print("Original array: ", end="")
    print_array(arr)
    print("Sorted array: ", end="")
    print_array(selection_sort(arr))







