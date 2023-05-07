//les type generique
/*type ShopOfString={
	name: string;
	items: Array<string>;
}
type ShopOfBoolean={
	name: string;
	items: Array<boolean>;
}
type ShopOfNumbers={
	name: string;
	items: Array<number>;
}*/


////////////////////////////////pour éviter cette diplication
/*type Shop<ItemType>={
	name: string;
	items: Array<ItemType>
}
type ShopOfString=Shop<string>
type ShopOfBoolean=Shop<boolean>
type ShopOfNumbers=Shop<number>*/

////---les fonction génériques;

interface Character {
	name: string;
	life: number;
	amount?: string;
	attack: number;
	defense?: number;
}
interface Shop<T> {
	name: string;
	owner: Character;
	items: Array<T>;
};
// Une fonction générique
function createShop<ItemType>(name: string,owner: Character,items: Array<ItemType>): Shop<ItemType> {
	return {name,owner,items};

}

// Appel de la fonction générique
const armory=createShop('My armory',{name: 'Bob',life: 100,attack: 1,defense: 2},[]);




function getArgument<T>(x: T): T {
	return x
}

getArgument(4);

//type partial
type Person={
	name: string;
	age: number;
	adress: string;
}

const x: Partial<Person>={
	age: 30
}

type keyesForMycharacter="age"|"name"|"present"

type MyCharacter=Record<keyesForMycharacter,string|number|boolean>;
const a: MyCharacter={
	name: "wafi",
	age: "20",
	present: "yes",
	opa:"ss"
}
const b: MyCharacter={
	name: "wafi",
	age: 20,
	present: true
}
