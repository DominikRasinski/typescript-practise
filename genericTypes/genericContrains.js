// Typy generyczne ze względu na to, ze posiadaja mozliwosc dynamicznego dziedziczenia typow po przekazaniu danych
// moze byc troche problematyczne, na przyklad podczas przekazania obiektow
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
mergeObj(1, 2); // nie ma sensu poniewaz operator spread nie zadziala na liczbach, ale nie zwroci bledu bo logika sie zgadza 
// Aby zabezpieczyc funkcje przed przyjmowaniem jakichkolwiek typow podczas deklaracji funkcji musimy skorzystac z slowa extends przy definiowaniu generycznego typu i wskazac jaki typ chcemy obslugiwac
function saveMergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
// saveMergeObj(1,2) // zwroci blad, bo typy przekazanych parametrow sie nie zgadzaja z typami jakie oczekujemy w typie generycznym
saveMergeObj({ name: "Dominik" }, { numberOfCops: 50 }); // mozna sprawdzic, ze wynikiem funkcji bedzie przewidywany dosc skomplikowany obiekt
// mozna poprawic widocznosc jakie typy zostana zwrocone prze funkcje poprzez dodanie dwoch typow generycznych
function readableSaveMergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
readableSaveMergeObj({ name: "Dominik" }, { numberOfCops: 50 }); // zwrotka jaki typ zostanie zwrocony jest o wiele krotsza, poniewaz teraz jest zwracany Intersection Types
