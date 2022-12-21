//Basic Types

let id: number = 5;
let company: string = 'Populus IT Solutions';
let isPublished: boolean = true;
let x: any = 'Hello';
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

//tuple
let person: [number, string, boolean] = [1, 'Maycon', true];
//Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Maycon'],
    [2, 'John'],
    [3, 'Doe']
];

//union
let sid: string | number = 300;

//enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Down);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//objects -- Interfaces
type User = {
    id: number,
    name: string
}

const user: User = {   
    id: 1,
    name: 'Maycon'
}

//Type Assertion

let cid: any = 1;
//let customerId = <number>cid;
let customerId = cid as number;

//Functions
function addNum (x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));

function log (message: string | number): void {
    console.log(message);
}

log('Hello World');
log(350);

//Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Maycon'
}

//user1.id = 2; //error

interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
const mul: MathFunc = (x: number, y: number): number => x * y;
const div: MathFunc = (x: number, y: number): number => x / y;

console.log(add(1, 2));

//Classes

class Person {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setId(id: number) { 
        this.id = id;
    }
    setName(name: string) {
        this.name = name;
    }

}

const maycon = new Person(1, 'Maycon');

// maycon.name = 'Maycon Douglas';
// console.log(maycon.name);

console.log(maycon.getName());