// let x=8;
// var y=4;
// const A='a';

// {
//     let x=9;
// }
// console.log(x);
// let x='hello';
// let y="world";
// let hi=x+ " " + y;

// function x(){
//     let hi="hello";
//     function y(){
//         console.log('hi');
//     }
//     return yield;
// }
// let sayHi=x()();
// console.log(sayHi);

// function x(param){
//     function y(param1){
//         return param1+param;
//     }
//     return y;
// }
// let sum=x(3)(6);
// console.log(sum);

//compose

// const x = (a,b)=> (c)=> a(b(c));
// const sum2=(num)=>num*2;
// const sum=(num)=>num+1;

// let ret=x(sum2,sum)(6);
// console.log(ret)

//objects
let obj={
    name:'john',
    lName:'ivanov',
    age:25,
    getFullName:function(){
        console.log(this.name+ " "+ this.lName);
    }
}
let obj1= new Object();





