// calkowicie bezsensowny dekorator, ktory tylko moze zwrocic te sama metoda jaka dostal
function replace(target: Function, ctx: ClassMethodDecoratorContext) {
    console.log(target); // target jest metoda ktora dekorujemy
    console.log(ctx); // context calej metdy co posiada
    return function(this: any) {
       target.apply(this);
    }
}

// dekorator modyfikujacy dzialanie metody do ktorej jest dolaczony
function corrupt(target: Function, ctx: ClassMethodDecoratorContext) {
    return function(this: any) {
        console.log(`${this.name} is corrupted`);
    }
}


class Android {
    name = "Lily";

    @corrupt
    greet() {
        console.log(this.name);
    }
}

const lily = new Android;
lily.greet();