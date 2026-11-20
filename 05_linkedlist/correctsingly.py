
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


# 3. Add element at the head
def addathead(head, mydata):
    newdata = Node(mydata)

    newdata.next = head
    return newdata


# 4. Add element at specific position (0-based)
def addatspecificposition(head, mydata, position):
    if position < 0:
        raise IndexError("Invalid position")

    if position == 0:
        return addathead(head, mydata)

    temp = head
    index = 0

    while index < position - 1 and temp is not None:
        temp = temp.next
        index += 1

    if temp is None:
        raise IndexError("Position out of range")

    newdata = Node(mydata)
    newdata.next = temp.next
    temp.next = newdata

    return head


# 5. Remove element from head
def removefromhead(head):
    if head is None:
        return None

    return head.next


# 6. Remove element from tail
def removefromtail(head):
    if head is None or head.next is None:
        return None

    temp = head

    while temp.next.next is not None:
        temp = temp.next

    temp.next = None
    return head


# 7. Remove element from specific position (0-based)
def removeatspecificposition(head, position):
    if position < 0 or head is None:
        raise IndexError("Invalid position")

    if position == 0:
        return removefromhead(head)

    temp = head
    index = 0

    while index < position - 1 and temp.next is not None:
        temp = temp.next
        index += 1

    if temp.next is None:
        raise IndexError("Position out of range")

    temp.next = temp.next.next

    return head


# 8. Access / Print all elements
def allaccess(head):
    temp = head

    while temp is not None:
        print(temp.data, end=" -> ")
        temp = temp.next

    print("None")


# Testing all operations

head = Node(1)

head = addatend(head, 2)
head = addatend(head, 3)

head = addathead(head, 0)

head = addatspecificposition(head, 10, 2)

allaccess(head)

head = removefromhead(head)
head = removefromtail(head)
head = removeatspecificposition(head, 1)

allaccess(head)
