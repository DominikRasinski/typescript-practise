// wykorzystanie is jako type guard
var isCop = function (user) {
    return user.type === 'cop';
};
var checkUser = function (user) {
    if (isCop(user)) {
        console.log('To jest policjant');
    }
    else {
        console.log('To jest detektyw');
    }
};
var cop = {
    type: 'cop',
    name: "Herald",
    role: "admin",
};
checkUser(cop);
