type Naytiba = {
    type: string,
    behavior: string,
}

type Android = {
    name: string,
    protocol: string,
    weapon: string,
}


type CheckType<T> = T extends Naytiba ? Naytiba : Android;

const Gigas: Naytiba = {
    type: "monkey",
    behavior: "aggressive",
}

const Eve: Android = {
    name: "Eve",
    protocol: "EVE",
    weapon: "blade",
}

type Example = CheckType<typeof Gigas>
type Example1 = CheckType<typeof Eve>