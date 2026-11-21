class Node :
    def __init__(self , prev=None, next=None, data=None):
        self.data=data
        self.prev=None
        self.next=None


# insert at begning 
def insert_at_head(head, idata):
    # during passing the parameter define which parameter you are passing 
    newdata=Node(data=idata)
    newdata.next=head
    if head:
        head.prev=newdata
    return newdata

# insert at tail 
def tailinsert(head , idata):
    newdata=Node(data=idata)
    temp=head
    while temp is not None:
        temp=temp.next
    temp.next=newdata
    if head:
        newdata.prev=temp
    return head


def display_all(head):
    temp=head
    while temp is not None:
        print(temp.data,"->",end=" ")
        temp=temp.next


head=None
head=insert_at_head(head, 0)
print('after 0 inserted')
display_all(head)
head=insert_at_head(head, 1)
print('after 1 inserted')
display_all(head)
head=insert_at_head(head, 2)
print('after 2 inserted')
display_all(head)
head=insert_at_head(head, 3)
print('after 3 inserted')
display_all(head)
head=insert_at_head(head, 4)
print('after 4 inserted')
display_all(head)
head=insert_at_head(head, 5)
print('after 5 inserted')
display_all(head)




