
def selection_sort(arr):
    n=len(arr)
    for i in range(0,n-1):
        min_idx=i
        for j in range(i+1,n):
            if arr[j]<arr[min_idx]:
                min_idx=j
        arr[i],arr[min_idx]=arr[min_idx],arr[i]


        



if __name__ == "__main__":
    arr = [64, 25, 12, 22, 11]
    # [, 11  25, 12, 22 64,]
    
    print("Original array: ", end="")
    print(arr)
    
    selection_sort(arr)
    
    print("Sorted array: ", end="")
    print(arr)