enum Role {ADMIN, USER, AUTHOR} // wykorzystanie typu enum jako standaru opisu roli.
// Role zapisane za pomocą typu enum mają pod sobą zapisaną wartość numeryczną aby oszczędzać miejsce w pamięci

const Person = {
    name: "Dominik",
    login: "DOM",
    role: Role.ADMIN,
}

if (Person.role === Role.ADMIN) {
    console.log("Jestem Adminem");
}