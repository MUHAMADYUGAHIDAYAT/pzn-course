// const hei = (nama) =>{
//     const say = `Hello ${nama}`;
//     document.writeln(`<p>${say}</p>`);
// };

const hei = (nama) => document.writeln(`Hello ${nama} senang bertemu dengan mu`);
hei("Yuga");

const sum = (first, second) => first + second;
console.info(sum(10, 10));

function sum2(first, second) {
    return first + second;
}
console.info(sum2(10, 10))

function berikanSayaNama(panggil){
    panggil("Yuga");
}

// anoonymous function
// berikanSayaNama(function (nama){
//     console.log(`Hi ${nama}`);
// })

// Arrow Function
berikanSayaNama((nama) => console.log(`hi ${nama}`));