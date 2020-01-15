//Object destructuring
// console.log('destructuring');
// const person = {
//   name:'Andrew',
//   age:26,
//   location:{
//     city:'Philadelphia',
//     temp:92
//   }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name, age} = person;
//
// console.log(`${name} is ${age}`);
//
// const { city, temp } = person.location
// console.log(`It's ${temp} in ${city}`);


// const book = {
//   title:'Ego is the enemy',
//   author:'Ryan Holiday',
//   publisher:{
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


const address = ['1299 Juniper Street','Philadelphia','Pennsylvenia','19147'];
const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)','2.00','2.50','2.75'];
const [name,,price] = item;

console.log(`A medium ${name} costs ${price}`);
