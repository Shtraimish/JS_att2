//ex1
// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve("Promise resolved");
//         } else {
//             reject("Promise rejected");
//         }
//     });
// }

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//ex2
function sucsessWaiter() {
  return new Promise((resolve, reject) => {
    console.log("before");
    setTimeout( ()=> {
      console.log("inside");
      resolve("sakis");
    }, 4000);
  
  });
}
sucsessWaiter();
