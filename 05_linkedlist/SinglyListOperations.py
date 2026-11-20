# create node of the ll
# add elements at end 
# access elements (list down all elements)
# add elements at head
# add element at specific position
# remove elements from head , tail and at a specificic position



class Node :
    def __init__ (self , data):
        self.data=data
        self.next=None

def addatend(head,mydata):
    newdata=Node(mydata)
    temp=head
    if head==None:
        head=newdata
    while temp!=None:
        temp=temp.next
    temp.next=newdata

def addathead(head , mydata):
    newdata=Node(mydata)
    newdata.next=head
    head.next=head

def addatspecificposition(head ,mydata,position):
    newdata=Node(mydata)
    temp=head
    if position==0:
        newdata.next=head
        head=newdata

    tindex=position-1
    index=0
    while index<tindex:
        temp=temp.next
    newdata.next=temp.next
    temp.next=newdata

def removefromhead(head):
    head=head.next
def removeformtail(head):
    temp=head
    while temp.next!=head:
        temp=temp.next
    temp.next=None

def removeatspecificposition(head ,position):
    temp=head
    aposition=position-1
    idx=1
    while idx<=aposition:
        temp=temp.next
    temp.next=temp.next.next
    


    

def allaccess(head):
    temp=head
    if head==None:
        return
    while temp!=None:
        print(temp.data)
        temp=temp.next



head=Node(1)
addatend(head,2)
allaccess(head)




