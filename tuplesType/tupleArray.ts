// stworzenie tablicy typu tuple
const newTuple: [number, string] = [23, "DOM"];
console.log(newTuple);

// Wyrzuci bład podczas kompilacji bo dane nie są na miejscu jakim są spodziewane
// const newTuple2: [number, string] = ["32", 2];
// console.log(newTuple2);

// brak zabezpieczenia przed mutacją tablicy za pomoca metod
newTuple.push(10);
console.log(newTuple);