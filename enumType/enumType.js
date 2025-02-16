var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Person = {
    name: "Dominik",
    login: "DOM",
    role: Role.ADMIN,
};
if (Person.role === Role.ADMIN) {
    console.log("Jestem Adminem");
}
