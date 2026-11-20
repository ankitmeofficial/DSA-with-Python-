# # class myclass:
# #     x=3

# # p1=myclass()
# # print(p1.x)

# # # every class have build in method 
# # # __init__()



# # num=[1,2,3,4,5]
# # it = iter(num)

# # print(next(it))
# # print(next(it))
# # print(next(it))
# # print(next(it))
# # print(next(it))



# # how we create the class to store the linkedlist (singly linkedlist)

# # class Node:
# #     def __init__(self , data):
# #         self.data=data  
# #         self.next=None


# class Node:
#     def __init__(self,data):
#         self.data=data
#         self.next=None

# Node1=Node(0)
# Node2=Node(1)
# Node3=Node(2)
# Node4=Node(3)

# Node1.next=Node2
# Node2.next=Node3
# Node3.next=Node4


# # print(Node1.next.data)
# # print(Node2.next.data)


# # print the all elements 
# temp=Node1
# while(temp!=None):
#     print(temp.data)
#     temp=temp.next


