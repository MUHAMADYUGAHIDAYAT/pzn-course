const examValue = 10;

if (examValue > 80){
    document.writeln(`<p> Selamat Anda Lulus Dengan Nilai : ${examValue} </p>`);
} else if (examValue > 70) {
    document.writeln(`<p> Maaf Anda Tidak Lulus Karena Nilai anda : ${examValue}</p>`);
} else if (examValue > 60) {
    document.writeln(`<p> Belajar Lagi Yah Nilai kamu : ${examValue}`);
} else if (examValue > 50) {
    document.writeln(`<p> kok bisa sih Nilai kamu : ${examValue}`);
} else if (examValue > 40) {
    document.writeln(`<p> Bisa bisa nya Nilai kamu : ${examValue}`);
} else if (examValue > 30) {
    document.writeln(`<p> ngapain aja kamu Nilai kamu : ${examValue}`);
} else if (examValue > 20) {
    document.writeln(`<p> main game aja terus Nilai kamu : ${examValue}`);
} else if (examValue > 10) {
    document.writeln(`<p> haduh capek aku Nilai kamu : ${examValue}`);
} else {
    document.writeln(`<p> .......... nilai : ${examValue}`);
}