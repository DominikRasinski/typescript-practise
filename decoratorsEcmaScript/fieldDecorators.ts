// dekorator wplywajacy na pola w klasie
function fieldEdit(target: undefined, ctx: ClassFieldDecoratorContext) {
    return (initialValue: any) => {
        return 'AttackDrone';
    }
}

class Drone {
    @fieldEdit
    name = "Drone"

    printName(): void {
        console.log(this.name);
    }
}

const drone = new Drone;
drone.printName(); //wynikiem będzie nowa wartosc przekazana przez dekorator

// ustawienie dekoratora pola na wlasciwosc ktora bedzie stworzona przez konstruktor
class DroneV2 {
    @fieldEdit
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(this.name);
    }
}

const newVersionDrone = new DroneV2("DefendDrone");
newVersionDrone.printName(); // dekorator nie mial wplywu poniewaz ustawia wartosc przed inicjalizacja pola dlatego jako target przyjmuje wartosc undefined