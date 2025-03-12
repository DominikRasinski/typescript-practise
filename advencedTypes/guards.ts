type Cop = {
    type: 'cop';
    name: string;
    role: string;
 };
 
 type Detective = {
    type: 'detective';
    name: string;
    case: string;
 };
 
 type User = Cop | Detective;

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

const cop: User = {
    type: 'cop',
    name: "Herald",
    role: "admin",
}

checkUser(cop);