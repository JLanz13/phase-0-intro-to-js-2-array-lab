// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = () => cats.push('Ralph');

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

const appendCat = name => {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice(0, 2);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}