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

def display_all(head):
    temp=head
    while temp is not None:
        print(temp.data ,"->")
        temp=temp.next


head=None
head=insert_at_head(head, 0)
head=insert_at_head(head, 1)
head=insert_at_head(head, 2)
head=insert_at_head(head, 3)
head=insert_at_head(head, 4)
head=insert_at_head(head, 5)

display_all(head)




