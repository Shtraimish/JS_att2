// const obj1={
//     a:"smth",
//     b:42,
//     c:false
// };
// const newArr=Object.entries(obj1);
// console.log(newArr);



// const newerArr=[
//     ["name","daniel"],
//     ["age", "almost30"]
// ];
// console.log(Object.fromEntries(newerArr));

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//   };
  
//   const { street: s, city: c } = address;
//   console.log(s) //Evergreen Terrace
//   console.log(c) //Springfield

// class Rectangle{
//     constructor(height,width){
//         this.width=width;
//         this.height=height;
//      }
//      calcArea(){
//         return this.height*this.width;
//      }
// }
// const square=new Rectangle(10,10);
// console.log(square.calcArea());


// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// killerRabbit.speak("death");
// blackRabbit.speak("hello");


// class Rectangle{
//         constructor(height,width){
//             this.width=width;
//             this.height=height;
//          }
// get area(){
//     return this.height*this.width;
// }
// set area(factor){
//     this.width=this.height*factor
// }
// }
// const square=new Rectangle(10,10);
// console.log(square.area);

// class Animal { 
//     constructor(name) {
//       this.name = name;
//     }
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }

//   class Dog extends Animal {
//     constructor(name,noise) {
//       super(name); // call the super class constructor and pass in the name parameter
//       // Add a new property
//       this.noise = noise;
//     }
  
//     speak() {
//       console.log(`${this.name} barks.It says ${this.noise}`);
//     }
//   }

//   let newDog=new Dog("fluffy","woof");
//   newDog.speak();

//   class Golden extends Dog{
//     constructor(name,noise,color){
//         super(name,noise);
//         this.color=color;
//     }
//     speak() {
//         console.log(`${this.name} barks.It says ${this.noise}, and it's color is ${this.color}`);
//       }
//   }

//   const goldenDoggo=new Golden("bobbie","woooooooo","black");

//   goldenDoggo.speak();


