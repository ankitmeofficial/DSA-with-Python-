def insertion_sort(arr):
    n=len(arr)
    for i in range(1,n):
        key=arr[i]
        j=i-1
        while j>=0 and key<arr[j]:
            arr[j+1]=arr[j]
            j-=1
        arr[j]=key

def print_arr(arr):
    for val in arr:
        print(val, end=" ")
    print()
    


if __name__ == "__main__":
    arr=[4,7,64,1,2,9]
    insertion_sort(arr)
    print_arr(arr)
