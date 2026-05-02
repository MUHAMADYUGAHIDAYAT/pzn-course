function Orang(namaDepan, namaBelakang){
    this.namaDepan =namaDepan;
    this.namaBelakang = namaBelakang;
    this.bilang = function (nama) {
        console.info(`Hello ${nama}, nama saya ${this.namaBelakang}`)
    }
}

const adhit = new Orang("Muhammad", "Adhitya");

const raffi = new Orang("Muhammad", "Raffi");


console.log(adhit);
console.log(raffi);
adhit.bilang("ayam");
raffi.bilang("ayam");
