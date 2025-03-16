// dekorator logujący informacje na temat klasy

function logClass(target: any, ctx: ClassDecoratorContext) {
    console.log(target);
    console.log(ctx);
}

@logClass
class Naytiba {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

// dekorator modyfikujace klasę

function corruption<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    return class extends target {
        corruption = "corrupted"
    }
}

@corruption
class Android {
    name = "Tachy"
}

const Tachy = new Android();
console.log(Tachy);