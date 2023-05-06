//signature of function 
function add(x: number,y: number): number {
	return x+y
}

///alias

function checkeLife(person: {life: number},amount: number) {
	person.life-=amount;
}
/*===>in this case we can use alias*/
type Person={life: number|string}
/*or interface*/
interface Person {
	life: number;
}
function checkeLife(person: Person,amount: number) {
	person.life-=amount;
}


type Pet={
	name: string;
	life: number;
	age: number;
};

type Hero={
	name: string;
	life: number;
	age: number;
	pet?: Pet;
}
//list or table in type Script 
type ArrayOfNumber=number[];
/*or*/
type ArrayOfNumber=Array<number>
const x: ArrayOfNumber=[1,2]

