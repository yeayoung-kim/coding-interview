let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let Score=Number(input[0]);

if (Score>=90){
    console.log("A")
}
else if (Score>=80){
    console.log("B")
}
else if (Score>=70){
    console.log("C")
}
else if (Score>=60){
    console.log("D")
}
else{
    console.log("F")
}