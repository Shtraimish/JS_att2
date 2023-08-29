//ex1
// function getData(){
//     fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     .then((response)=>{
//         if(!response.ok){
//             throw console.error('failed response');
//         } else{
//             return response.json()
//         }
//     })
//     .then((data) => {
//         console.log(data);
//         });

// }
// getData();

//ex2
// function getData(){
//     fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=0')
//     .then((response)=>{
//         if(!response.ok){
//             throw console.error('failed response');
//         } else{
//             return response.json()
//         }
//     })
//     .then((data) => {
//         console.log(data);
//         });

// }
// getData();
//
//ex3

// async function getData() {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/");
//     if (!response.ok) {
//       throw new Error("invalid response");
//     }
//     const starWarsObj = await response.json();
//     console.log(starWarsObj.result);
//   } catch (error) {
//     console.error("failed operation", error);
//   }
// }
// getData();
//ex4
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();