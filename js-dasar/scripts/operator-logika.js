const nilaiUjian = 90;
const nialiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
document.writeln(lulusUjian);
const lulusAbsensi = nialiAbsensi > 75;
document.writeln(lulusAbsensi);


const lulus = lulusUjian && lulusAbsensi;
document.writeln(lulus);
