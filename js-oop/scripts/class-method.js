class Orang {

    constructor(nama){
        this.nama = nama;
    }
    bilang(nama){
    console.info(`Hello ${nama}, nama saya ${this.nama}`);
    }
}
const adhit = new Orang("adhitya");
console.log(adhit);
adhit.bilang("deka")
const raffi = new Orang("Raffi");
console.log(raffi)
raffi.bilang("diko");