// Obiekt wykorzystujący mechanizm inheritance type czyli nie jawne przypisanie oczekiwanego typu do zmiennej na podstawie podanych wartości
const person = {
    name: "Dominik",
    age: 25,
}

// Obiekt z jawnie okreslonymi własnościami jakie są oczekiwane
const person2: {
    // definiowanie typu danych jaki oczekujemy, że nowa instancja obiektu dostanie
    name: string;
    age: number;
} = { 
    // moment kiedy definiujemy obiekt i jego własności
    name: "Dominik",
    age: 25,
}