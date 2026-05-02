function sayHello (firstname, lastName){
    const say = `Hello ${firstname} ${lastName}`;
    return say;
}
const result = sayHello("muhamad", "Yuga");
document.writeln(`<p>${result}</p>`);

function getFinalValue(value){
    if(value > 80){
        return "A";
    } else if (value > 70) {
        return "B";
    } else if (value > 60) {
        return "C";
    } else if (value > 50) {
        return "D";
    } else if (value > 40) {
        return "E";
    } else {
        return "F";
    }
}

const finalValue = getFinalValue(90);
document.writeln(`<p>${finalValue}</p>`)

function isContain(array, searchValue){
    for(const element of array){
        if (element === searchValue){
            return true;
        }
    }
    return false;
}

const array = [1,23,23123,123,1313,2,21,12,3,3,1313,123,1,3123,123,];
const search = 90;
const found = isContain(array, search);
document.writeln(`<p>${found}</p>`);
if (found === true){
    document.writeln(`<p>array yang kamu cari yaitu (${search}) ada</p>`)
} else {
    document.writeln(`<p>Array yang kamu cari yaitu (${search}) tidak di temukan</p>`)
}