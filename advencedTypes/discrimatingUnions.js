// Unie dyskryminacyjne
var Role;
(function (Role) {
    Role[Role["INTERVENTION"] = 0] = "INTERVENTION";
    Role[Role["K9"] = 1] = "K9";
    Role[Role["FBI"] = 2] = "FBI";
})(Role || (Role = {}));
;
var Personel = {
    type: "cop",
    name: "Tomek",
    role: Role.K9,
};
var checkPersonel = function (user) {
    if (user.type === "cop") {
        console.log('To jest policjant');
    }
    if (user.type === "detective") {
        console.log('To jest detektyw');
    }
};
checkPersonel(Personel);
