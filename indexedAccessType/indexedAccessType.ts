interface Person {
    name: string;
    age: number;
    job: string;
    permission: {
       read: boolean;
       write: boolean;
    }[]
 }

 type Perms = Person['permission'];

 type Perm = Perms[number]