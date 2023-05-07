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
;
// Une fonction générique
function createShop(name, owner, items) {
    return { name: name, owner: owner, items: items };
}
// Appel de la fonction générique
var armory = createShop('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2 }, []);
function getArgument(x) {
    return x;
}
getArgument(4);
var x = {
    age: 30
};
/*type MyPerson=Partial<Person>;
const x: MyPerson={name: "wafi"}*/
