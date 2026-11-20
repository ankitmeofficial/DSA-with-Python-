
/*
============================================================
             COMPLETE TYPESCRIPT REVISION
                  BEGINNER TO ADVANCED
============================================================

TypeScript is a superset of JavaScript.

It provides:
1. Static typing
2. Type checking
3. Interfaces
4. Classes and OOP
5. Generics
6. Advanced types
7. Better code organization

HOW TO RUN:

npm install -D typescript ts-node @types/node

npx tsc --init

npx ts-node typescript-revision.ts

============================================================
*/

// ==========================================================
// 1. VARIABLES AND DATA TYPES
// ==========================================================

// let: Variable whose value can change.
let studentName: string = "Ankit";

let studentAge: number = 22;

let isStudent: boolean = true;

// const: Variable that cannot be reassigned.
const country: string = "India";

// Type inference:
// TypeScript automatically identifies the type.

let company = "Google";  // string
let salary = 50000;      // number

// company = 100; // ERROR: string cannot become number.

// ANY:
// Allows any type of value.
// Avoid using it because it removes type safety.

let randomValue: any = 100;

randomValue = "Hello";
randomValue = true;

// UNKNOWN:
// Accepts any value but requires type checking
// before using type-specific operations.

let unknownValue: unknown = "TypeScript";

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// NULL AND UNDEFINED

let empty: null = null;

let notAssigned: undefined = undefined;

// TYPE ANNOTATION:
// Explicitly tells TypeScript the variable's type.

let marks: number = 90;


// ==========================================================
// 2. ARRAYS
// ==========================================================

// Array of numbers.

let numbers: number[] = [10, 20, 30, 40];

// Array of strings.

let names: string[] = ["Ankit", "Rahul", "Amit"];

// Another syntax for declaring arrays.

let prices: Array<number> = [100, 200, 300];

// ACCESS ARRAY ELEMENTS

console.log(numbers[0]);
console.log(numbers[1]);

// ADD ELEMENT.

numbers.push(50);

// REMOVE LAST ELEMENT.

numbers.pop();

// REMOVE FIRST ELEMENT.

numbers.shift();

// ADD ELEMENT AT BEGINNING.

numbers.unshift(5);

// ARRAY LENGTH.

console.log(numbers.length);

// LOOP THROUGH ARRAY.

for (let num of numbers) {
    console.log(num);
}

// forEach:
// Executes a function for each element.

numbers.forEach((num) => {
    console.log(num);
});

// map:
// Creates a NEW array by transforming elements.

let doubledNumbers = numbers.map((num) => {
    return num * 2;
});

// filter:
// Returns elements satisfying a condition.

let filteredNumbers = numbers.filter((num) => {
    return num > 20;
});

// reduce:
// Combines all elements into one value.

let total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);


// ==========================================================
// 3. TUPLES
// ==========================================================

// A tuple is an array with a fixed structure.
// Each position has its own specified type.

let person: [string, number, boolean];

person = ["Ankit", 22, true];

// Position 0 = string
// Position 1 = number
// Position 2 = boolean

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// Optional tuple element.

let userInfo: [string, number?] = ["Ankit"];


// ==========================================================
// 4. FUNCTIONS
// ==========================================================

// A function is a reusable block of code.

// BASIC FUNCTION.

function greet(): void {
    console.log("Hello Ankit");
}

greet();

// FUNCTION WITH PARAMETERS.

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));

// a and b are parameters.
// number after the brackets specifies return type.

// FUNCTION WITH STRING.

function welcome(name: string): string {
    return `Welcome ${name}`;
}

console.log(welcome("Ankit"));

// OPTIONAL PARAMETERS:
// ? means a parameter is optional.

function userDetails(name: string, age?: number): void {
    console.log(name);

    if (age !== undefined) {
        console.log(age);
    }
}

userDetails("Ankit");
userDetails("Rahul", 25);

// DEFAULT PARAMETERS:
// Uses the default value if no argument is passed.

function calculatePrice(
    price: number,
    tax: number = 18
): number {

    return price + (price * tax / 100);
}

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 10));

// REST PARAMETERS:
// Accepts multiple arguments as an array.

function calculateTotal(...prices: number[]): number {

    return prices.reduce((total, price) => {
        return total + price;
    }, 0);

}

console.log(calculateTotal(100, 200, 300));

// ARROW FUNCTION.

const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 10));

// SHORT ARROW FUNCTION.

const square = (num: number): number => num * num;

console.log(square(5));

// FUNCTION TYPE:
// Defines the structure of a function.

let operation: (a: number, b: number) => number;

operation = (a, b) => a + b;

console.log(operation(10, 20));


// ==========================================================
// 5. OBJECTS
// ==========================================================

// Object stores data in key-value pairs.

let student = {
    name: "Ankit",
    age: 22,
    city: "Bangalore"
};

console.log(student.name);
console.log(student.age);

// Explicitly declaring object structure.

let employee: {
    id: number;
    name: string;
    salary: number;
} = {

    id: 101,
    name: "Ankit",
    salary: 50000

};

// OPTIONAL PROPERTY.

let user: {
    name: string;
    email?: string;
} = {

    name: "Ankit"

};

// READONLY PROPERTY.

let product: {
    readonly id: number;
    name: string;
} = {

    id: 1,
    name: "Laptop"

};

// product.id = 2; // ERROR: readonly property.


// ==========================================================
// 6. TYPE ALIAS
// ==========================================================

// type creates our own custom data type.
// It avoids repeating the same object structure.

type Employee = {

    id: number;
    name: string;
    salary: number;
    department: string;

};

let employee1: Employee = {

    id: 101,
    name: "Ankit",
    salary: 50000,
    department: "IT"

};

let employee2: Employee = {

    id: 102,
    name: "Rahul",
    salary: 60000,
    department: "HR"

};

// Both objects follow the Employee structure.


// ==========================================================
// 7. INTERFACES
// ==========================================================

// Interface defines the structure of an object.
// It is commonly used in application development.

interface Student {

    name: string;
    age: number;
    city: string;

}

let student1: Student = {

    name: "Ankit",
    age: 22,
    city: "Bangalore"

};

// INTERFACE WITH OPTIONAL PROPERTY.

interface User {

    name: string;
    email?: string;

}

let user1: User = {

    name: "Ankit"

};

// INTERFACE WITH READONLY.

interface Car {

    readonly id: number;
    brand: string;
    model: string;

}

let myCar: Car = {

    id: 1,
    brand: "Toyota",
    model: "Fortuner"

};

// INTERFACE EXTENDING:
// One interface can inherit another interface.

interface Vehicle {

    brand: string;
    speed: number;

}

interface Bike extends Vehicle {

    engineCC: number;

}

let bike: Bike = {

    brand: "Royal Enfield",
    speed: 120,
    engineCC: 350

};

// TYPE VS INTERFACE:
//
// Interface:
// 1. Mainly describes object structures.
// 2. Can extend other interfaces.
// 3. Supports declaration merging.
//
// Type:
// 1. Can describe objects, unions, tuples and more.
// 2. Supports intersections using &.
// 3. Cannot be reopened through declaration merging.


// ==========================================================
// 8. UNION TYPES
// ==========================================================

// Union means a variable can have multiple types.
// | means OR.

let id: string | number;

id = 101;
id = "USER101";

// Both values are allowed.

// UNION WITH FUNCTIONS.

function printId(id: string | number): void {

    if (typeof id === "string") {

        console.log(id.toUpperCase());

    } else {

        console.log(id.toFixed(2));

    }

}

printId("ankit");
printId(100);

// TYPE NARROWING:
// Checking the type before performing operations.


// ==========================================================
// 9. INTERSECTION TYPES
// ==========================================================

// Intersection combines multiple types.
// & means AND.

type BasicInfo = {

    name: string;

};

type AdditionalInfo = {

    age: number;

};

type CompleteInfo = BasicInfo & AdditionalInfo;

let completeUser: CompleteInfo = {

    name: "Ankit",
    age: 22

};


// ==========================================================
// 10. LITERAL TYPES
// ==========================================================

// Only predefined values are allowed.

let direction: "left" | "right" | "up" | "down";

direction = "left";

// direction = "north"; // ERROR.

type Status = "pending" | "success" | "failed";

let paymentStatus: Status = "success";


// ==========================================================
// 11. ENUMS
// ==========================================================

// Enum stores named constant values.

enum Direction {

    Up,
    Down,
    Left,
    Right

}

let move: Direction = Direction.Up;

console.log(move); // 0

// STRING ENUM.

enum OrderStatus {

    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"

}

let order: OrderStatus = OrderStatus.Pending;


// ==========================================================
// 12. CLASSES
// ==========================================================

// Class is a blueprint for creating objects.
// Object is an instance of a class.

class Person {

    name: string;
    age: number;

    // Constructor runs when an object is created.

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

    // Method inside class.

    introduce(): void {

        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);

    }

}

// Creating object using new.

let person1 = new Person("Ankit", 22);

person1.introduce();


// ==========================================================
// 13. ACCESS MODIFIERS
// ==========================================================

// public:
// Accessible everywhere.
//
// private:
// Accessible only inside the class.
//
// protected:
// Accessible inside the class and subclasses.

class BankAccount {

    public accountHolder: string;

    private balance: number;

    protected bankName: string;

    constructor(holder: string, balance: number) {

        this.accountHolder = holder;
        this.balance = balance;
        this.bankName = "SBI";

    }

    public getBalance(): number {

        return this.balance;

    }

}

let account = new BankAccount("Ankit", 50000);

console.log(account.accountHolder);
console.log(account.getBalance());

// console.log(account.balance); // ERROR.


// ==========================================================
// 14. INHERITANCE
// ==========================================================

// Inheritance allows one class to reuse another class.
// extends is used for inheritance.

class Animal {

    name: string;

    constructor(name: string) {

        this.name = name;

    }

    makeSound(): void {

        console.log("Animal makes sound");

    }

}

class Dog extends Animal {

    breed: string;

    constructor(name: string, breed: string) {

        super(name);

        this.breed = breed;

    }

    bark(): void {

        console.log(`${this.name} is barking`);

    }

}

let dog = new Dog("Tommy", "German Shepherd");

dog.makeSound();
dog.bark();

// super() calls the parent constructor.


// ==========================================================
// 15. METHOD OVERRIDING
// ==========================================================

// Child class can redefine a parent method.

class Parent {

    show(): void {

        console.log("Parent class");

    }

}

class Child extends Parent {

    override show(): void {

        console.log("Child class");

    }

}

let child = new Child();

child.show();


// ==========================================================
// 16. ABSTRACT CLASSES
// ==========================================================

// Abstract class cannot be instantiated directly.
// It is designed to be inherited.

abstract class Shape {

    abstract calculateArea(): number;

    display(): void {

        console.log("This is a shape");

    }

}

class Rectangle extends Shape {

    constructor(
        private width: number,
        private height: number
    ) {

        super();

    }

    calculateArea(): number {

        return this.width * this.height;

    }

}

let rectangle = new Rectangle(10, 20);

console.log(rectangle.calculateArea());


// ==========================================================
// 17. IMPLEMENTING INTERFACES
// ==========================================================

// implements forces a class to follow an interface.

interface Printable {

    print(): void;

}

class DocumentFile implements Printable {

    print(): void {

        console.log("Printing document");

    }

}

let file = new DocumentFile();

file.print();


// ==========================================================
// 18. STATIC MEMBERS
// ==========================================================

// static belongs to the class itself,
// not to an individual object.

class MathUtility {

    static PI: number = 3.14159;

    static square(num: number): number {

        return num * num;

    }

}

console.log(MathUtility.PI);
console.log(MathUtility.square(5));


// ==========================================================
// 19. GENERICS
// ==========================================================

// Generics allow reusable code with different data types.
// T is a placeholder for a type.

function display<T>(value: T): T {

    console.log(value);

    return value;

}

display<number>(100);

display<string>("Hello");

display<boolean>(true);

// TypeScript can automatically infer T.

display("Ankit");

// GENERIC ARRAY FUNCTION.

function getFirstElement<T>(arr: T[]): T {

    return arr[0];

}

console.log(getFirstElement<number>([10, 20, 30]));

console.log(getFirstElement<string>(["A", "B", "C"]));

// GENERIC INTERFACE.

interface ApiResponse<T> {

    status: number;
    data: T;

}

let response: ApiResponse<string> = {

    status: 200,
    data: "Success"

};

// GENERIC CLASS.

class Storage<T> {

    private items: T[] = [];

    add(item: T): void {

        this.items.push(item);

    }

    getAll(): T[] {

        return this.items;

    }

}

let numberStorage = new Storage<number>();

numberStorage.add(10);
numberStorage.add(20);

console.log(numberStorage.getAll());

// GENERIC CONSTRAINTS.
// extends restricts which types can be passed.

function getLength<T extends { length: number }>(
    value: T
): number {

    return value.length;

}

console.log(getLength("TypeScript"));
console.log(getLength([10, 20, 30]));

// getLength(100); // ERROR.


// ==========================================================
// 20. TYPE ASSERTIONS
// ==========================================================

// Type assertion tells TypeScript what type
// you believe a value has.
//
// It does not convert the actual value.

let someValue: unknown = "Hello TypeScript";

let stringLength: number =
    (someValue as string).length;

console.log(stringLength);

// Another syntax:
// let value = <string>someValue;
//
// The "as" syntax is preferred in TSX projects.


// ==========================================================
// 21. TYPE GUARDS
// ==========================================================

// typeof checks the runtime type.

let testValue: string | number = "Hello";

if (typeof testValue === "string") {

    console.log(testValue.toUpperCase());

}

// instanceof checks whether an object
// belongs to a particular class.

class CarClass {

    start(): void {

        console.log("Car started");

    }

}

let vehicle = new CarClass();

if (vehicle instanceof CarClass) {

    vehicle.start();

}

// CUSTOM TYPE GUARD.

function isString(value: unknown): value is string {

    return typeof value === "string";

}

let checkValue: unknown = "Hello";

if (isString(checkValue)) {

    console.log(checkValue.toUpperCase());

}


// ==========================================================
// 22. KEYOF
// ==========================================================

// keyof extracts the property names
// from an object type as a union.

type StudentInfo = {

    name: string;
    age: number;
    city: string;

};

type StudentKeys = keyof StudentInfo;

// StudentKeys = "name" | "age" | "city"


// ==========================================================
// 23. TYPEOF OPERATOR
// ==========================================================

// In a type position, typeof obtains
// the type of an existing variable.

let userObject = {

    name: "Ankit",
    age: 22

};

type UserObjectType = typeof userObject;


// ==========================================================
// 24. INDEX SIGNATURES
// ==========================================================

// Allows an object to contain dynamic keys.

interface Marks {

    [subject: string]: number;

}

let studentMarks: Marks = {

    Maths: 90,
    Science: 85,
    English: 80

};


// ==========================================================
// 25. DISCRIMINATED UNIONS
// ==========================================================

// A common literal property identifies
// which type of object is being used.

type Success = {

    status: "success";
    data: string;

};

type Failure = {

    status: "failure";
    error: string;

};

type Result = Success | Failure;

function handleResult(result: Result): void {

    if (result.status === "success") {

        console.log(result.data);

    } else {

        console.log(result.error);

    }

}

handleResult({
    status: "success",
    data: "Data received"
});


// ==========================================================
// 26. NEVER AND VOID
// ==========================================================

// void:
// Function does not return a meaningful value.

function sayHello(): void {

    console.log("Hello");

}

// never:
// Function never completes normally.

function throwError(message: string): never {

    throw new Error(message);

}


// ==========================================================
// 27. NULLISH COALESCING
// ==========================================================

// ?? uses the right value only when the left
// value is null or undefined.

let inputName: string | null = null;

let finalName = inputName ?? "Guest";

console.log(finalName);

// Difference:
// || checks all falsy values.
// ?? checks only null and undefined.


// ==========================================================
// 28. OPTIONAL CHAINING
// ==========================================================

// ?. safely accesses a property.
// Prevents errors when a value is null
// or undefined.

type UserProfile = {

    address?: {

        city?: string;

    };

};

let profile: UserProfile = {};

console.log(profile.address?.city);


// ==========================================================
// 29. UTILITY TYPES
// ==========================================================

interface UserDetails {

    name: string;
    age: number;
    email: string;

}

// PARTIAL:
// Makes all properties optional.

type PartialUser = Partial<UserDetails>;

let updateUser: PartialUser = {

    name: "Ankit"

};

// REQUIRED:
// Makes all properties required.

type RequiredUser = Required<PartialUser>;

// PICK:
// Selects specific properties.

type UserName = Pick<UserDetails, "name" | "email">;

// OMIT:
// Removes selected properties.

type UserWithoutEmail = Omit<UserDetails, "email">;

// READONLY:
// Makes all properties readonly.

type ReadonlyUser = Readonly<UserDetails>;

// RECORD:
// Creates an object type with key-value pairs.

type UserRoles = Record<string, string>;

let roles: UserRoles = {

    admin: "Full Access",
    user: "Limited Access"

};

// EXCLUDE:
// Removes a type from a union.

type AllTypes = string | number | boolean;

type WithoutBoolean = Exclude<AllTypes, boolean>;

// EXTRACT:
// Extracts matching types from a union.

type OnlyString = Extract<AllTypes, string>;

// NONNULLABLE:
// Removes null and undefined.

type CleanType = NonNullable<string | null | undefined>;


// ==========================================================
// 30. CONDITIONAL TYPES
// ==========================================================

// Conditional types work like if-else
// at the type level.

type CheckType<T> =
    T extends string ? "String Type" : "Other Type";

type A = CheckType<string>;

type B = CheckType<number>;


// ==========================================================
// 31. MAPPED TYPES
// ==========================================================

// Mapped types create a new type
// by iterating through the properties
// of an existing type.

type OptionalProperties<T> = {

    [K in keyof T]?: T[K];

};

type OptionalUser = OptionalProperties<UserDetails>;


// ==========================================================
// 32. TEMPLATE LITERAL TYPES
// ==========================================================

// Creates string types using template syntax.

type EventName = "click" | "scroll";

type EventHandler = `on${Capitalize<EventName>}`;

// Result:
// "onClick" | "onScroll"


// ==========================================================
// 33. PROMISES
// ==========================================================

// Promise represents a future result.
// It can be pending, fulfilled or rejected.

function getData(): Promise<string> {

    return new Promise((resolve, reject) => {

        resolve("Data received successfully");

    });

}

getData().then((result) => {

    console.log(result);

}).catch((error) => {

    console.log(error);

});


// ==========================================================
// 34. ASYNC AND AWAIT
// ==========================================================

// async makes a function return a Promise.
// await waits for the Promise to settle.

async function fetchData(): Promise<string> {

    return "Hello from API";

}

async function displayData(): Promise<void> {

    const result = await fetchData();

    console.log(result);

}

displayData();


// ==========================================================
// 35. ERROR HANDLING
// ==========================================================

// try:
// Code that might produce an error.
//
// catch:
// Handles an error.
//
// finally:
// Executes whether an error occurs or not.

async function loadData(): Promise<void> {

    try {

        const result = await fetchData();

        console.log(result);

    } catch (error) {

        console.log("Something went wrong:", error);

    } finally {

        console.log("Execution completed");

    }

}

loadData();


// ==========================================================
// 36. FETCH API
// ==========================================================

// fetch is used to make HTTP requests.
// This example requires internet access when executed.

interface Post {

    userId: number;
    id: number;
    title: string;
    body: string;

}

async function getPosts(): Promise<void> {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        // Check whether HTTP request succeeded.

        if (!response.ok) {

            throw new Error("HTTP request failed");

        }

        // Convert JSON response into data.

        const post: Post = await response.json();

        console.log(post.title);

    } catch (error) {

        console.log("API Error:", error);

    }

}

// Uncomment to execute the API request.

// getPosts();


// ==========================================================
// 37. DESTRUCTURING
// ==========================================================

// Extracting values from objects.

const userData = {

    name: "Ankit",
    age: 22,
    city: "Bangalore"

};

const { name, age, city } = userData;

console.log(name);
console.log(age);

// ARRAY DESTRUCTURING.

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;


// ==========================================================
// 38. SPREAD OPERATOR
// ==========================================================

// ... expands an array or object.

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr2);

// OBJECT SPREAD.

const oldUser = {

    name: "Ankit",
    age: 22

};

const newUser = {

    ...oldUser,
    city: "Bangalore"

};


// ==========================================================
// 39. REST OPERATOR
// ==========================================================

// Rest collects multiple values into one array.

function showNumbers(...values: number[]): void {

    console.log(values);

}

showNumbers(10, 20, 30, 40);


// ==========================================================
// 40. MAP
// ==========================================================

// Map stores key-value pairs.

const userMap = new Map<string, number>();

userMap.set("Ankit", 22);
userMap.set("Rahul", 25);

console.log(userMap.get("Ankit"));

console.log(userMap.has("Rahul"));


// ==========================================================
// 41. SET
// ==========================================================

// Set stores unique values.

const uniqueNumbers = new Set<number>();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(10);

console.log(uniqueNumbers);

// Duplicate 10 is stored only once.


// ==========================================================
// 42. TYPE ALIAS FOR FUNCTIONS
// ==========================================================

// We can define a reusable function type.

type Calculator = (a: number, b: number) => number;

const addition: Calculator = (a, b) => a + b;

const subtraction: Calculator = (a, b) => a - b;

console.log(addition(10, 5));

console.log(subtraction(10, 5));


// ==========================================================
// 43. GENERIC CONSTRAINT WITH KEYOF
// ==========================================================

// K must be a valid key of T.

function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {

    return object[key];

}

const personData = {

    name: "Ankit",
    age: 22

};

console.log(getProperty(personData, "name"));

console.log(getProperty(personData, "age"));


// ==========================================================
// 44. MODULES: IMPORT AND EXPORT
// ==========================================================

// Modules allow code to be divided into files.
//
// Example:
//
// math.ts:
//
// export function add(a: number, b: number): number {
//     return a + b;
// }
//
// export const PI = 3.14159;
//
// app.ts:
//
// import { add, PI } from "./math";
//
// console.log(add(10, 20));
//
// DEFAULT EXPORT:
//
// calculator.ts:
//
// export default function subtract(a: number, b: number) {
//     return a - b;
// }
//
// app.ts:
//
// import subtract from "./calculator";
//
// NOTE:
// Actual imports and exports require separate files.
// This single revision file demonstrates their syntax
// through comments rather than duplicate declarations.


// ==========================================================
// 45. NAMESPACES
// ==========================================================

// Namespace groups related code under one name.

namespace Mathematics {

    export function add(a: number, b: number): number {

        return a + b;

    }

}

console.log(Mathematics.add(10, 20));


// ==========================================================
// 46. TYPE DECLARATIONS
// ==========================================================

// Declaration files use the .d.ts extension.
//
// They describe types of JavaScript libraries
// without implementing their actual functionality.
//
// Example:
//
// declare function greet(name: string): void;
//
// declare const version: string;
//
// You generally get these declarations
// through installed type packages such as @types/node.


// ==========================================================
// 47. DECORATORS
// ==========================================================

// Decorators add metadata or modify classes
// and class members.
//
// Decorator support depends on the TypeScript
// decorator model and compiler configuration.
//
// Modern TypeScript supports standard decorators.
// Legacy experimental decorators require
// experimentalDecorators: true.
//
// Example of a standard class decorator:

function Logger<T extends new (...args: any[]) => object>(
    constructor: T
) {

    console.log("Class created:", constructor.name);

    return constructor;

}

@Logger
class ExampleClass {

    constructor() {

        console.log("Example object created");

    }

}

new ExampleClass();


// ==========================================================
// 48. TYPE ASSERTION WITH AS CONST
// ==========================================================

// as const makes values as specific as possible
// and properties readonly.

const directions = ["left", "right", "up"] as const;

// directions.push("down"); // ERROR.


// ==========================================================
// 49. TYPE PREDICATES
// ==========================================================

// A predicate uses "value is Type"
// to tell TypeScript that a condition
// proves the type of a value.

function isNumber(value: unknown): value is number {

    return typeof value === "number";

}

let sample: unknown = 100;

if (isNumber(sample)) {

    console.log(sample.toFixed(2));

}


// ==========================================================
// 50. FINAL REVISION EXAMPLE
// MINI STUDENT MANAGEMENT SYSTEM
// ==========================================================

// This combines:
// Interfaces
// Classes
// Arrays
// Functions
// Generics
// Access modifiers
// Type annotations

interface StudentRecord {

    id: number;
    name: string;
    marks: number;

}

class StudentManager {

    private students: StudentRecord[] = [];

    // ADD STUDENT.

    addStudent(student: StudentRecord): void {

        this.students.push(student);

    }

    // DISPLAY ALL STUDENTS.

    getStudents(): StudentRecord[] {

        return this.students;

    }

    // FIND STUDENT BY ID.

    findStudent(id: number): StudentRecord | undefined {

        return this.students.find((student) => {

            return student.id === id;

        });

    }

    // DELETE STUDENT.

    deleteStudent(id: number): void {

        this.students = this.students.filter((student) => {

            return student.id !== id;

        });

    }

    // CALCULATE AVERAGE MARKS.

    getAverageMarks(): number {

        if (this.students.length === 0) {

            return 0;

        }

        const total = this.students.reduce((sum, student) => {

            return sum + student.marks;

        }, 0);

        return total / this.students.length;

    }

}

// CREATE MANAGER OBJECT.

const manager = new StudentManager();

// ADD STUDENTS.

manager.addStudent({

    id: 1,
    name: "Ankit",
    marks: 90

});

manager.addStudent({

    id: 2,
    name: "Rahul",
    marks: 85

});

// DISPLAY STUDENTS.

console.log(manager.getStudents());

// FIND STUDENT.

console.log(manager.findStudent(1));

// CALCULATE AVERAGE.

console.log(manager.getAverageMarks());

// DELETE STUDENT.

manager.deleteStudent(2);

console.log(manager.getStudents());


// ==========================================================
//                 END OF REVISION FILE
// ==========================================================

/*
IMPORTANT CONCEPTS TO REMEMBER:

1. let and const          = Variables
2. string, number         = Data types
3. []                     = Arrays
4. [string, number]       = Tuple
5. function               = Reusable code
6. type                   = Custom type
7. interface              = Object structure
8. |                      = Union
9. &                      = Intersection
10. enum                  = Named constants
11. class                 = Object blueprint
12. extends               = Inheritance
13. implements            = Interface implementation
14. super                 = Parent constructor/method access
15. this                  = Current object
16. public                = Public access
17. private               = Class-only access
18. protected              = Class and subclasses
19. static                = Class-level member
20. <T>                   = Generic
21. keyof                 = Object keys
22. typeof                = Type extraction/runtime check
23. as                    = Type assertion
24. never                 = Never completes normally
25. void                  = No meaningful return
26. Partial               = All properties optional
27. Required              = All properties required
28. Pick                  = Select properties
29. Omit                  = Remove properties
30. Record                = Key-value object type
31. Promise               = Future result
32. async/await           = Asynchronous programming
33. try/catch             = Error handling
34. ...                   = Spread or rest
35. ?.                    = Optional chaining
36. ??                    = Nullish coalescing
37. as const              = Readonly literal types

*/
