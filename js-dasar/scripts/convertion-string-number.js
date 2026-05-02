const nilai1 = parseInt("1");
const nilai2 = 1;
const sum = nilai1 + nilai2;

document.writeln(`<p>${sum}</p>`);
console.log(sum);

document.writeln(`<p>${parseInt("1.1")}</p>`);
document.writeln(`<p>${parseFloat("1.1")}</p>`);
document.writeln(`<p>${Number("1.1")}</p>`);

document.writeln(`<hr>`);

const a = 1;
const b = 2;
const total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);

document.writeln(`<hr>`);

document.writeln(`<p>${parseInt("1salah")}</p>`);
document.writeln(`<p>${parseFloat("1.1ayam")}</p>`);

document.writeln(`<hr>`);

document.writeln(`<p>${Number("1salah")}</p>`);
document.writeln(`<p>${Number("1.1ayam")}</p>`);

document.writeln(`<hr>`);

const pertama = Number("salah");
const totalNumber = pertama + 100;
document.writeln(`<p>${totalNumber}</p>`)
document.writeln(`<p>${isNaN(pertama)}</p>`)
document.writeln(`<p>${isNaN(100)}</p>`)
document.writeln(`<p>${isNaN(NaN)}</p>`)