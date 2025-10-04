// string method

// Math =>1 to 10,run=>3
// system =>9
// 7=>first time => (3)100% discount
// 2=>second =>50%=>2
// 3=>10%=>1

// Math.random()=>random=>0 to 10

// var limit = 3;
// var systemNumber = parseInt(Math.random() * 10);
// var find = false; //number
// for (limit = 3; limit > 0; limit--) {
//   var userinput = +prompt("Enter Random number between 0 to 9 or system number is " + systemNumber );
//   if (userinput.toString().length==0) {
//     limit++;
//   } else {
//     if (limit == 3 && systemNumber == userinput) {
//       document.writeln("Welldone you guess in first step or get 100% discount");
//       find = true;
//       break;
//     } else if (limit == 2 && systemNumber == userinput) {
//       document.writeln("Welldone you guess in second step or get 50% discount");
//       find = true;
//       break;
//     } else if (limit == 1 && systemNumber == userinput) {
//       document.writeln("Welldone you guess in third step or get 10% discount");
//       find = true;

//       break;
//     }
//   }
// }
// if (find == false) {
//   document.writeln("no discount");
// }
// var userPassword = prompt("Enter User Password")
// var run = true;
// for(var run;run==true;){

// }

// charcodeAt(index number(0))=>string=>ascii value=> Ham user kia input
// A,0,10,u,U`=>password`

// ml:0101001
// ascii:65
// // hl: A
// userInput =>10(min)=>prompt=>10,a,A,0 to 9,special letter=>end

// a=1 //assign
// a==1 // condition

// A to Z=>65 to 90
// a to z=>97 to 122
// 0 to 9 => 48 to 57

// var run = true ;  //loop run ho

// //get user input
// for (var run = true; run == true; ) {
//   var userInput = prompt("Create User Password ",userInput);

//   if (userInput == "") {
//     alert("Please enter Your Password");

//     run = true;
//   } else if (userInput.length < 10) {
//     alert("Please enter must be minmun 10 letter ");

//     run = true;
//   }
//    else {
//     var captialLetter = false;
//     var smallLetter = false;
//     var numberLetter = false;
//     var specialLetter = false;

// // ABC1234Ab@ //time

//     //password check
//     for (var i = 0; i < userInput.length; i++) {
//       var currentCode = userInput.charCodeAt(i); //get every index find ascii code =>i =>index => by loop

//       if ((currentCode >= 65 && currentCode <= 90) ) {
//         captialLetter = true; //set ka capital letter present ha password
//       } else if (currentCode >= 97 && currentCode <= 122) {
//         smallLetter = true; //set ka small letter present ha password
//       } else if (currentCode >= 48 && currentCode <= 57) {
//         numberLetter = true;//set ka number letter present ha password
//       } else {
//         specialLetter = true; //set ka special letter present ha password
//       }
//     }

//     var message = "Missing";

//     if (
//       captialLetter == true &&
//       smallLetter == true &&
//       numberLetter == true &&
//       specialLetter == true
//     ) {
//       document.writeln("your password is strong or your password is  "+userInput);
//       break;
//     } else {
//       if (captialLetter == false) {
//         message += " Capital Letter";
//       }  if (specialLetter == false) {
//         message += " special Letter";
//       }  if (smallLetter == false) {
//         message += " small letter";
//       }  if (numberLetter == false) {
//         message += " Number letter";
//       }
//       alert(message)
//     }
//   }
// }

// var password = "Abc1234@?!"
// for(var i=0;i<password.length;i++){
//     var code = password.charCodeAt(i)
//     console.log(code)

// }
