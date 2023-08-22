const people = ["Greg", "Mary", "Devon", "James"];
//1
// people.shift();
// console.log(people)
//2
// people.splice(3,1,"Jason");
// console.log(people)
//3
// people.push("Vladimir");
// console.log(people);
//4
// console.log(people.indexOf("Mary"));
//5
// const peopleCopy=people.slice();
// console.log(peopleCopy);
// peopleCopy.splice(peopleCopy.indexOf("Mary"),1);
// console.log(peopleCopy);
//6
// console.log(people.indexOf("Foo"));
//7
// let last=people[people.length-1];
// console.log(last);


//EX2
// let colors=['red','white','black','orange','green'];
// for (i=0;i<colors.length;i++) {
// console.log(`my ${i+1} favorite colour is ${colors[i]}`)
// }

//EX3
// const userInput=prompt("please enter a number");
 
// if(userInput!=null){
//     if(!isNaN(userInput)){
//         console.log("user entered a valid number",userInput)
//         console.log("data type of input:",typeof userInput)
//     }
// }

//EX4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log("the number of floors in this building is ",building.numberOfFloors)
// console.log(`the 1 floor has ${building.numberOfAptByFloor.firstFloor} apartments and 3 floor has ${building.numberOfAptByFloor.thirdFloor}`)
// console.log(`${building.nameOfTenants[1]} has a ${building.numberOfRoomsAndRent.dan[0]} rooms`)

// if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1]=1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

// EX5
// const family={
//     father:"John",
//     mother:"Jane",
//     son:"Jonatan",
//     daughter:"Jenifer"
// };
// for (key in family){
//     console.log(`current key is ${key}`)
// }
// for (value in family){
//     console.log(`current value is ${value}`)
// }


//EX 6


// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let sentence = '';
// let isFirst = true;

// for (const key in details) {
//     if (!isFirst) {
//         sentence += ' ';
//     }
//     isFirst = false;

//     sentence += key + ' ' + details[key];
// }
// console.log(sentence);

//actually not sure if i need that check for being first

//EX 7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const sortedNames=names.sort();

// let societyName='';
// for(const name in sortedNames){
// societyName+=sortedNames[name][0];
// console.log(name)
// }
// console.log(societyName)

// for (const name of sortedNames) {
//     secretSocietyName += name[0];
// }

// console.log(secretSocietyName); 
