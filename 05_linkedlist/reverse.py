
# 1. Create a node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# 2. Add element at the end
def addatend(head, mydata):
    newdata = Node(mydata)
    if head is None:
        return newdata
    temp = head
    while temp.next is not None:
        temp = temp.next
    temp.next = newdata
    return head

def reversell(head):
    pre=None
    curr=head
    past=head.next
    while curr.next!=None:
        curr.next=pre
        pre=curr
        curr=past
        past=past.next
    return curr


def allaccess(head):
    temp = head
    while temp is not None:
        print(temp.data, end=" -> ")
        temp = temp.next
    print("None")


head = Node(1)
head = addatend(head, 2)
head = addatend(head, 3)
allaccess(head)
reversell(head)
allaccess(head)