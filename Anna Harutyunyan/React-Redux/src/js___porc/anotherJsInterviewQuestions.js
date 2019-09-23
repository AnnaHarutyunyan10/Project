// 1
var y = 1;
//function F(){}
if (function F(){}) {
    y += typeof F;
   
}
console.log(y);