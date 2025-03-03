
// Klasa abstrakcyjna, ktora wymusza implementacje metod jakie powinny sie znalezc w klasie dziedziczacej
abstract class AirPortWarsaw {
    private name: string = "Warsaw";

    get AirPortName() {
        return this.name;
    }

    // Metody wymuszone do implementacji sa oznaczana slowem abstract i nie posiadaja implementacji
    abstract landing(): void;
    abstract departing(time: string): void;
}


class Plane extends AirPortWarsaw{

    planeName: string;

    constructor(name: string) {
        super();
        this.planeName = name;
    }

    // Metody wymuszone do zaimplementowania przez klase AirPortWarsaw
    landing(): void {
        console.log(`Plane ${this.planeName} land safely`)
    }

    departing(time: string): void {
        console.log(`Plane ${this.planeName} will depart at ${time}`)
    }
}


const plane234 = new Plane("XC234");

plane234.landing();
plane234.departing("20-01-2025:19:45");

console.log(plane234.AirPortName);