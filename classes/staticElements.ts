class Mech { 
    serialNumber: string;
    private eliminatedEnemy: string[] = [];

    // Metoda statyczna pozwalajaca na wywolanie jej bez tworzenia instancji obiektu na podstawie klasy Mech
    static shoot() {
        console.log("BOOOM");
    }

    constructor(serialNumber: string) {
        this.serialNumber = serialNumber;
    }

    get confirmedEliminations() {
        return this.eliminatedEnemy;
    }

    set elimination(enemy: string) {
        if (enemy) {
            this.eliminatedEnemy.push(enemy);
        } else {
            throw new Error("Please provide correct name enemy")
        }
    }

}

const mechX2134 = new Mech("X2134");

console.log(mechX2134.serialNumber);
Mech.shoot(); //Metoda shoot jest dostępna w klasie Mech bez potrzeby tworzenia instancji do nowego obiektu