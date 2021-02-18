// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Andy',
//     age: 39,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Andy',
    age: 39,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}