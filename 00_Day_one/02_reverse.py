number = 12345
ans="";
while number>0:
    temp=number%10
    # ans.append(str(temp))
    ans+=(str(temp))
    number//=10
final_ans=int(ans)
print(final_ans)





