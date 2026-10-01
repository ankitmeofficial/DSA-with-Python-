# number- 1234
# output - 4321

mynum=1234

result=0
while mynum>0:
    lastdigit=mynum%10
    # result+=str(lastdigit)
    result=result*10+lastdigit
    mynum//=10

print(result)
