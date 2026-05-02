const name = "KuHaKuNo";
const namaDepan = "Muhamad";
const namaTengah = "Yuga";
const namaBelakang = "Hidayat";
const template = `Name : ${namaDepan} ${namaTengah} ${namaBelakang}`;

console.log(template);
document.writeln(template);

document.writeln("<br>");

let nilai = 90;
const template2 = `Name : ${name}, Lulus : ${nilai > 70}`;
console.info(template2);
document.writeln(template2);

document.writeln("<br>");

const multiLine = `Nama Saya Yuga,
Hello World
Malas banget rek
aowkwkkwkwkwkkwkwkwkkw`;

document.writeln("<pre>");
document.writeln(multiLine);
document.writeln("</pre>");
