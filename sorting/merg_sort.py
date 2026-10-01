def msort(arr):
    if len(arr)<=1:
        return arr
    
    mid = len(arr)//2
    lefthalf=arr[:mid]
    righthalf=arr[mid:]

    sortedleft = msort(lefthalf)
    sortedright = msort(righthalf)

    return merge(sortedleft,sortedright)
    
    


def merge(leftarr , rightarr):
    result=[]
    i=j=0
    while i<len(leftarr) and j<len(rightarr):
        if leftarr[i]<rightarr[j]:
            result.append(leftarr[i])
            i+=1
        else:
            result.append(rightarr[j])
            j+=1

    result.extend(leftarr[i:])
    result.extend(rightarr[j:])
    return result




    arr = [38, 27, 43, 3, 9, 82, 10]
    print("Original array:", arr)
    arr = msort(arr)
    print("Sorted array:", arr)