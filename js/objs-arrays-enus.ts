/**
* ? Objects
* ? Array
* ? Tuple
* ? Defeates the purpose of TS
*/
export{};

enum Role {ADMIN, READ_ONLY, AUTHOR};

// Here we tell TS everything, including using a Tuple
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Thomas',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// person.role.push('admin');
// person.role[1] = 10;

// TS knows what the name and age must be, and here we is an example of enums
const person = {
    name: 'Thomas',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};



let favActivites: string[];
favActivites = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN ) {
console.log('user is admin');

}

