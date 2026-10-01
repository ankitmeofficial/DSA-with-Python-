# 5487
def count_number(num):
    count=0
    while num>0:
        count+=1
        num=num//10
    return count

salary = 5487
print("numbe of digit is : ")
myvalue=count_number(salary)
print(myvalue)



