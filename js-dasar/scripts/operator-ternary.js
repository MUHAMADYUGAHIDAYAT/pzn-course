const nilai = 80;
let ucapan;

// tanpa ternary
if(nilai >= 80){
    ucapan = "Selamat, Anda Lulus";
} else {
    ucapan = "Maaf, Anda Gagal";
};
document.writeln(`<p>${ucapan}</p>`);//true

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");

// pakek          Ternary       true                 false
ucapan = nilai >= 90 ? "Selamat, Anda Lulus" : "Maaf, Anda Gagal";
document.writeln(`<p>${ucapan}</p>`);//false
