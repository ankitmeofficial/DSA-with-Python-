# nitin   #in this
# for number we can just do reverse a number and then compare 
# 
# num = 1234
num = 12321

# reverse then nubmer 
result=0;
temp=num
while num>0:
    ld=num%10
    result=result*10+ld
    num//=10

print(temp)
print(result)
if(temp==result):
    print("number is palindrome")
else:
    print("number is not a palindrome")


