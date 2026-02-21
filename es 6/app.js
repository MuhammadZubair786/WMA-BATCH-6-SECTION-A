// var a = 10;
// var a = 34;

// let b = 34;
// b = 45;

// const pi = 3.14;
// pi = 34;
// console.log(pi);

// let a = 20;

// function(){
// let a = 20;
// }

// if(){
// }
// let a = 10;

// function test(){
//     let  a = 20;
//     console.log(a);
// }
// a=a+5;
// test()
// console.log(a)

// var => redeclare,update,global scope
// let=no redclare,update,block scope
// const=no redeclare,no update,block scope

// const pi =3.14
// function abc(){
//     pi = 4.56;

// }

// arrow function
// es5
// function add(a,b){
//     console.log(a)
//     console.log(b)
//     return a+b;
// }

//es6
// let add=(a,b)=> a+b;
//  let check=()=> console.log("hello world")

// let add=(a,b)=> {
//     console.log(a)
//     console.log(b)
//     check();

//     return a+b;
// };

// add(4,5)

// template literal

// var a = 10
// var b = 20

// console.log("value of a is " + a + " and value of b is " + b + "sum is "+(a+b))
// console.log(`value of a is ${a} and value of b is ${b}   sum is ${(a+b)}`)

// destructing Array,object
// spread op
// let Arraytest =[1,2,3,4,56,89,90]
// let [a,b,c,d,...test]= Arraytest;

// let obj = {
//     name:"john",
//     age:34,
//     city:"delhi",
//     country:"india",
//     course:["js","python","java"]
// }
// let {name,age,course}=obj;
// console.log(course[0])
// console.log(obj.name)
// arr[0]
// arr[1]
// arr[2]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// arrow function:
// input =>return length=>  asad=>4,smit it course=>15

// data =>obj(name,course,age)
// destrcting show

// let clickbtn = document.getElementById("click");
// clickbtn.addEventListener("click",()=>{
//     let count = countLetter();
//     let countlength = document.getElementById("countlength");
//     countlength.innerText = `Total letters in the sentence is ${count}`;

// })

// let input = document.getElementById("input");
// let countLetter =()=>{
//     let sentence = document.getElementById("input").value;
//    return sentence.length;
// }
// input.addEventListener("input",()=>{
//     let count = countLetter();
//     let countlength = document.getElementById("countlength");
//     countlength.innerText = `Total letters in the sentence is ${count}`;
// });

// let  submit = document.getElementById("submit")
// submit.addEventListener("click",()=>{
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let course = document.getElementById("course").value;
//     let obj = {
//         username:name,
//        userage:age,
//         usercourse:course
//     }

//     let {username,userage,usercourse}=obj
//     console.log(username,userage,usercourse)

// })

// api integration
// promise

// string=> "smit it course student hdagf agshfgas fgasgf ",
//  "it","smit","course"
// resolve=>
// reject=>

// let data1 = new Promise((resolve, reject) => {
//   let a = 10;
//   if (a == 10) {
//     resolve({ message: "success", code: 200 });
//   } else {
//     reject("failed");
//   }
// });

// let data = new Promise((resolve, reject) => {
//   let a = 10;
//   if (a == 10) {
//     data1
//       .then((data) => {
//         console.log(data);
//         resolve({ message: "success", code: 200 });
//       })
//       .catch((err) => {
//         console.log(err);
//         reject("failed");
//       });
//   } else {
//     reject("failed");
//   }
// });

// data
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let Click = document.getElementById("Click");

Click.addEventListener("click", () => {
  let promsie = new Promise((resolve, reject) => {
    let userInput = document.getElementById("input").value;
    let userInput2 = userInput.split(" ");
    console.log(userInput2);
    let count = 0;
    for (let i = 0; i < userInput2.length; i++) {
      if (
        userInput2[i].toLowerCase() === "it" ||
        userInput2[i].toLowerCase() === "smit" ||
        userInput2[i].toLowerCase() === "course"
      ) {
        count++;
      }
    }
    if (count >= 3) {
      resolve({ message: "sentence contains it,smit,course" });
    } else {
      reject({ message: "sentence does not contain it,smit,course" });
    }
  });
  promsie
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// es6
classes
api=>fetch



