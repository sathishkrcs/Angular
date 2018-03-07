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
enum list { x, y, z }
console.log(list.x);

enum list2 { a=1, b=2, c=3 }
console.log(list2.a);

//*********************************************************************
//Comple type using interface

interface profile {
	name: string;
	id: number;
}

let getId = function (newProfile: profile) {
	return newProfile.id;
}

let x = getId({ id: 10, name: 'cts' });
console.log(x);
//*********************************************************************

