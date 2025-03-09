// wykorzystanie is jako type guard

const isCop = (user: User): user is Cop => {
    return user.type === 'cop';
};

const checkUser = (user: User) => {
    if (isCop(user)) {
        console.log('To jest policjant');
    } else {
        console.log('To jest detektyw');
    }
};