// TypeOf w TypeScript posiada dodatkową dosyć przydatną funkcję możemy 
// za pomocą tego operatora szybko tworzyć typy danych jakich chcemy użyć na podstawie już istniejących
// zmiennych, obiektów, funkcji, klas

const ArtMaster = {
    name: "Jon",
    technic: "drawing",
    artCollection: ["DOOM", "ZZZ", "Stellar"],
}

// Na przykład chcemy stworzyć typ który będzie opisywać obiekty ArtMaster

// Podejscie podstawowe
/*
    type ArtMasterType = {
        name: string,
        technic: string,
        artCollection: string[],
    }
*/

// Podejście z wykorzystaniem typeOf

type ArtMasterType = typeof ArtMaster;