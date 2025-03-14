// KeyOf operator jest dosyć specyficznym operatorem, dzięki niemu mamy dostęp do własności typu
// Operator KeyOf występuje jedynie w TS

type OperatorMech = {
    symbol: string;
    nickName: string;
    experience: string;
    mechLicense: string[];
}

const operatorMech: OperatorMech = {
    symbol: "RX-78-2",
    nickName: "Blade",
    experience: "Veteran",
    mechLicense: ["A123", "B456", "C789"]
}

// Użycie operatora keyOf

type KeyOperatorMech = keyof OperatorMech

// Stworzenie zmiennej na podstawie typu który korzysta z operatora keyOf innego typu
// spowoduje, że zmienna będzie mogła przyjmować tylko wartości równe występującym właściwością typu bazowego w tym przypadku OperatorMech
let validKeyOperator: KeyOperatorMech;

validKeyOperator = "experience"
validKeyOperator = "mechLicense"
validKeyOperator = "nickName"
validKeyOperator = "symbol"

// Wykorzystanie keyOf można wykorzystać do funkcji sprawdzającej czy dana właściwość nie jest null lub undefined


//T extends object, K extends keyof T zapi ogranicza generyk T do dopuszczenia tylko wartosci typu obiekt
// generyk K ogranicza typ danych do nazw właściwości wewnątrz obiektu przekazanego do parametru obj o type T
function getProp<T extends object, K extends keyof T>(obj: T, key: K) {

    const val = obj[key]

    if (val === null || val === undefined) {
        throw new Error("Accessing empty property")
    }

    return val;
}

console.log(getProp(operatorMech, "symbol"));