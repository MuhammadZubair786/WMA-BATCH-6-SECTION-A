var a = +prompt("enter number 1");
var b = +prompt("enter number 2");
var c = +prompt("enter number 3");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("please select correct number");
} else if (a > b && a > c) {
  console.log("A is Greater");
  if (b > c) {
    console.log("B is middle");
    console.log("C is small");
  } else if (c > b) {
    console.log("C is middle");
    console.log("B is small");
  } else if (b == c) {
    console.log("B and c is small and equal");
  }
} else if (b > a && b > c) {
  console.log("B is greater");
  if (a > c) {
    console.log(" a is middle");
    console.log(" c is small");
  } else if (c > a) {
    console.log(" c is middle");
    console.log(" a is small");
  } else if (c == a) {
    console.log("c and a is small an equal");
  }
} else if (c > a && c > b) {
  console.log(" C is greater");
  if (b > a) {
    console.log(" b is middle");
    console.log("a is small");
  } else if (a > b) {
    console.log(" a is middle");
    console.log("b is small");
  }
  else if(a==b){
    console.log("a and b is equal and small")

  }
}
else if(a==b && b==c){
    console.log("all number equal")

}
else if(a==b && b>c){
    console.log("a and b is equal or gretaer and c is small")

}
else if(a==c && c>b){
    console.log("a and c is equal or greater and b is small")

}
else if(b==c && c>a){
    console.log("b and c is equal or greater and a is small")

}