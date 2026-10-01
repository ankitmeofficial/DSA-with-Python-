# in this we find que of that number each digit digit and take sum be that all quebe 
# compre both digit and sum of quebe digit 

num=153
# 1+125+27=153
result=0
temp=num
nod=len(str(num))
# nod=int(nod)
while num>0:
    ld=num%10
    result=result+(ld**nod)
    num//=10

if(temp==result):
    print("armstrong")
else:
    print("not a armstrong")