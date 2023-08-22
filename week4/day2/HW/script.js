//EX1
// let header1= document.getElementById("header1");
// console.log(header1);
// let lastP=document.getElementById("lastParagraph");
// lastP.remove();
// let colChange=document.getElementById("colorChange");
// colChange.addEventListener("click",function(){
//     colChange.style.color="red";
// })
// let toHide=document.getElementById("toHide");
// toHide.addEventListener("click",function(){
//     toHide.style.display="none";
// })
// let divBald=document.getElementById("divBald");
// let baldButton=document.getElementById("baldButton");
// baldButton.addEventListener("click",function(){
//     divBald.style.display="none";
// })

//EX2
// let form=document.getElementById("form1");
// console.log(form);
// let fname=document.getElementById("fname");
// let lname=document.getElementById("lname"); 
// let submit=document.getElementById("submit");
// submit.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log(fname.value, lname.value);
// })


//EX3

// let allBoldItems=[];

// function getBaldItems(){
//     let paragraph=document.querySelector("p")
//     allBoldItems=paragraph.querySelectorAll("strong");
// }
// function highlight(){
//     for (const boldItem of allBoldItems){
//         boldItem.style.color="blue";
//     }
// }
// function returnItemsToDefault() {
//     for (const boldItem of allBoldItems) {
//         boldItem.style.color = "black";
//     }
// }
// const paragraph = document.querySelector("p");
// paragraph.addEventListener("mouseover", highlight);
// paragraph.addEventListener("mouseout", returnItemsToDefault);

// getBaldItems();

//EX4 no idea what is the actual goal

// const form = document.getElementById("MyForm");
// const radiusInput = document.getElementById("radius");
// const volumeInput = document.getElementById("volume");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const radius = parseFloat(radiusInput.value);
//     const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

//     if (!isNaN(volume)) {
//         volumeInput.value = volume.toFixed(2);
//     } else {
//         volumeInput.value = "Invalid radius";
//     }
// });
