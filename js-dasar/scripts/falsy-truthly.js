// truthly
let data =  "false";
if(data){
    document.writeln("True");
} else {
    document.writeln("False");
};

document.writeln("<br>");

let data2 = [];
if(data2){
    document.writeln("True");
} else {
    document.writeln("False");
};

document.writeln("<br>");

let data3 = -1;
if(data3){
    document.writeln("True");
} else {
    document.writeln("False");
};

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");

// falsy
data = "";
if(data){
    document.writeln("True");
} else {
    document.writeln("False");
};

document.writeln("<br>");

data2 = null;
if(data2){
    document.writeln("True");
} else {
    document.writeln("False");
};

document.writeln("<br>");
data3 = -0;
if(data3){
    document.writeln("True");
} else {
    document.writeln("False");
};