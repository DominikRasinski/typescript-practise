// Definiowanie przeciaznia funkcji add dla parametrow o danym typie danych
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: string | number, b: string | number) {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}

console.log(add(4, 5)); // 9
console.log(add("5", "5")); // string "55"