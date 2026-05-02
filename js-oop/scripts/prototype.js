function Orang(namaDepan, namaBelakang){
    this.namaDepan =namaDepan;
    this.namaBelakang = namaBelakang;
    this.bilang = function (nama) {
        console.info(`Hello ${nama}, nama saya ${this.namaBelakang}`)
    }
}
Orang.prototype.selamatTinggal = function (){
    console.log("Selamat tingal");
}
Orang.prototype.run = function (){
    console.log(`${this.namaBelakang} is Running`);
}


const adhit = new Orang("Muhammad", "Adhitya");
adhit.selamatTinggal = function (){
    console.log("Selamat tingal !!");
}
const raffi = new Orang("Muhammad", "Raffi");


console.log(adhit);
console.log(raffi);
adhit.bilang("ayam");
raffi.bilang("ayam");

adhit.selamatTinggal();
raffi.selamatTinggal();
adhit.run();
