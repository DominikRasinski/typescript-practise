// Stworzenie bazowego typu na ktorego podstawie bedziemy tworzyc mapy typow
type Android = {
    name: string;
    protocol: string;
    weapon: string;
}

// Utworzenie mapy typow na podstawie bazowego typu Android, ale 
// dodanie do niej modyfikatora readonly modyfikuje wszystkie wlasciwosci, jak nie mozliwe do napisania
type AndroidReadOnly = {
    readonly [Key in keyof Android]: string;
}

// Utworzenie mapy typow na podstawie bazowego typu Android, tyle ze wszystkie wlasciwosci sa opcjonalne
type AndroidPartial = {
    [Key in keyof Android]?: string;
}

const Eve: AndroidReadOnly = {
    name: "Eve",
    protocol: "EVE",
    weapon: "blade",
}

const Adam: AndroidPartial = {
    name: "Adam",
    protocol: "Naytiba Alpha",
}

console.log(Eve);
console.log(Adam);