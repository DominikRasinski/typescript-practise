function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}
console.log(add(4, 5)); // 9
console.log(add("5", "5")); // string "55"
