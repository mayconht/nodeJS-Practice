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

