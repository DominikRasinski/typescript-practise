var merge = function (a, b) {
    return [a, b];
};
var mergeTwoTypes = function (a, b) {
    return [a, b];
};
merge(1, 3);
// merge(6, "Tomek") //błąd ponieważ funkcja merge oczekuje paremetrow tylko jednego typu, ktory moze byc nadany dynamicznie
mergeTwoTypes(4, "Dominik"); // funckja mergeTwoTypes nie zwraca bledu poniewaz oczekujemy dwa typy ktore moga zostac nadane dynamicznie poprzez przekazanie parametrow
// Typy generyczne opieraja sie bardzo na mechanizmie dziedziczenia typow na podstawie przekazanej wartosci
