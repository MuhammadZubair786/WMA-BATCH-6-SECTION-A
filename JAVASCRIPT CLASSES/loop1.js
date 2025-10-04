// var arr =[1,2,3,4]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// // i   i<arr.length    i++      arr[i]
// 0       0<3                    arr[0]=>1
//        1<3            0+1=1     arr[1]=2
//        2<3             1+1=>2     arr[2]=>3
//        3<3              2+1=3

// User input => 8=>0
// var userInput = +prompt("Enter Your Number")
// var arr=[1,2,2,2,3,2,4,5,7,2]
// var checkNumber = false
// var present =0
// var array =[]

// for (var i=0;i<arr.length;i++){
//     if(userInput==arr[i]){
//        checkNumber=true;
//        present =present+1
//        array.push(i)
//     }
// }

// if(checkNumber==true){
//     console.log("Number is present")
//     console.log(present +" time is present")
//     console.log("array present in these index "+array)
// }
// else{
//     console.log("Number is not present")
// }

// Select

// platform
// ios(Apple,Oppo,macbook)
//Android (Pixel 5,Pixel 7,Samsung,Nokia)
// Price Range
// Apple(1 lac,1.5 lac,3 lac)
// Android(40 thousand,20 thousand,70 thousand,1 lac)
// Condition (new,old)

// var platformArray = ["ios", "Android"];
// var androidOp = ["Pixel 5", "Pixel 7", "Samsung", "Nokia"];
// var iosOp = ["Apple", "IPAD", "macbook"];

// var platform = document.getElementById("platform");
// var device = document.getElementById("device");

// var options = "";
// var options2 = "";

//  options += `<option value='' selected disabled>select device</option>`;
// for (var i = 0; i < platformArray.length; i++) {
//   options += `<option value='${platformArray[i]}'>${platformArray[i]}</option>`;
// }
// platform.innerHTML = options;

// function setPlatform(m1) {
//   options2 = "";
//   device.style.display="inline"

//   if (m1.value == "Android") {
//     for (var i = 0; i < androidOp.length; i++) {
//       options2 += `<option value='${androidOp[i]}'>${androidOp[i]}</option>`;
//     }
//   } else if (m1.value == "ios") {
//     for (var i = 0; i < iosOp.length; i++) {
//       options2 += `<option value='${iosOp[i]}'>${iosOp[i]}</option>`;
//     }
//   }

//   device.innerHTML = options2;
// }
