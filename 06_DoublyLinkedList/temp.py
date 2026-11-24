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
    if head is None:
        return newdata
    
    temp=head
    while temp.next is not None:
        temp=temp.next

    temp.next=newdata
    newdata.prev=temp
    return head


def display_all(head):
    temp=head
    while temp is not None:
        print(temp.data,"->",end=" ")
        temp=temp.next
    print(" ")


head=None
head=insert_at_head(head, 0)
head=insert_at_head(head, 1)
head=insert_at_head(head, 2)
display_all(head)

head=tailinsert(head, 3)
head=tailinsert(head, 4)
head=tailinsert(head, 5)
display_all(head)



