// Unie dyskryminacyjne

enum Role {INTERVENTION, K9, FBI};

type Cop = {
    type: "cop", // unikalna wartość dla typu
    name: string,
    role: Role,
}

type Detective = {
    type: "detective", // unikalna wartość dla typu
    name: string,
    role: Role,
}

type User = Cop | Detective; // utworzenie dyskryminacyjnej unii typow

const Personel: User = {
    type: "cop",
    name: "Tomek",
    role: Role.K9,
}

const checkPersonel = (user: User) => {
    if(user.type === "cop") {
        console.log('To jest policjant');
    }
    if (user.type === "detective") {
        console.log('To jest detektyw');
    }
}

checkPersonel(Personel);