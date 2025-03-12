// zdefiniowanie index type pozwalajacego na definiowanie kolejnych elementow 
// tylko musza trzyma typ definicji w innym wypadku wystapi blad
type Team = {
    [element: string]: string
}

const team: Team = {
    person1: "Dominik",
    person2: "Tomek",
    head: "Mateusz",
    // ai: 5 // zwroci blad
 }