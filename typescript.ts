let x = 3;
x = 'sat'; //error

let y;
y = 3;
y = 'sat'; //no error, y become any

//*********************************************************************
let x: number;
x = 'cts'; // Enforcing the numeric type will throw error

//Create own type
type numOrArray = number | number[]; //number or number array

let num:numOrArray = 10;
let numArr: numOrArray = [1, 2, 3];

//*********************************************************************
