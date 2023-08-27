// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//ex2

// function displayStudentInfo(objUser){
//     const { first, last } = objUser;
//     return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// ???????????????????????????


//ex3

// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const newArr=Object.entries(users);
// console.log(newArr);



// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const newArr=Object.entries(users).map(([key],[value])=>([key],[value*2]));
// console.log(newArr);

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const usersArray = Object.entries(users).map(([key, value]) => [key, value * 2]);
// console.log(usersArray);

//ex4
//
// class Person {
//     constructor(name) {
//         this.name = name;
//       }
//     }
    
//     const member = new Person('John');
//     console.log(typeof member);

//ex5.2

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

//ex5.3
// class Animal{
//     constructor(name,type,color){
//     this.name=name;
//     this.type=type;
//     this.color=color;}
// }
// class Mamal extends Animal{
//     constructor(name,type,color,sound){
//     super(name,type,color)
//     this.sound=sound;
//     }
//     speak(){
//         console.log(`my name is ${this.name}, i'm ${this.type}, and i say ${this.sound}`)
//     }
// }
// const cow= new Mamal("buryonka","cow","red","mooooo");
// cow.speak();