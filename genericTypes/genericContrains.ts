// Typy generyczne ze względu na to, ze posiadaja mozliwosc dynamicznego dziedziczenia typow po przekazaniu danych
// moze byc troche problematyczne, na przyklad podczas przekazania obiektow

function mergeObj<T>(a: T, b: T) {
    return {...a, ...b};
}

mergeObj(1,2) // nie ma sensu poniewaz operator spread nie zadziala na liczbach, ale nie zwroci bledu bo logika sie zgadza 

// Aby zabezpieczyc funkcje przed przyjmowaniem jakichkolwiek typow podczas deklaracji funkcji musimy skorzystac z slowa extends przy definiowaniu generycznego typu i wskazac jaki typ chcemy obslugiwac

function saveMergeObj<T extends object>(a: T, b: T) {
    return {...a, ...b};
}

// saveMergeObj(1,2) // zwroci blad, bo typy przekazanych parametrow sie nie zgadzaja z typami jakie oczekujemy w typie generycznym

saveMergeObj({name: "Dominik"}, {numberOfCops: 50}); // mozna sprawdzic, ze wynikiem funkcji bedzie przewidywany dosc skomplikowany obiekt

// mozna poprawic widocznosc jakie typy zostana zwrocone prze funkcje poprzez dodanie dwoch typow generycznych

function readableSaveMergeObj<T extends object, Y extends object>(a: T, b: Y) {
    return {...a, ...b};
}

readableSaveMergeObj({name: "Dominik"}, {numberOfCops: 50}); // zwrotka jaki typ zostanie zwrocony jest o wiele krotsza, poniewaz teraz jest zwracany Intersection Types