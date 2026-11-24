# class Allcars:
#     price="six lacks"


# m1=Allcars()
# print(m1.price)



class Person :
    def __init__(self , name , age):
        self.name=name
        self.age=age
    def greet(self):
        print("my name is ",self.name , "and age is ", self.age)

p1=Person("ankit",24)

print(p1.name)
print(p1.age)
p1.greet()

