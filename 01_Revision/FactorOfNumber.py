# 36=1,2,3,4,6,9,36

# method-1
# start with 1 and go to last one 

# method -1 optimized
# start with 1 and go to n/2 and add self number at end 

# method -3
# when division and reminder both are factorial then add both and do this only for sqrt of numbe only 
# ex=36 sqrt(36)=6
import math 
numb =36
myarr=[]
for i in range(1,int(math.sqrt(numb)+1)):
    if numb%i==0:
        myarr.append(i)
        if numb//i !=i:
            myarr.append(numb//i)

print(myarr)