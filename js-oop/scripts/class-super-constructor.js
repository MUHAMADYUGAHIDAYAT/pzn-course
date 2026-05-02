class Karyawan  {

        constructor(namaDepan){
            this.namaDepan = namaDepan;
    }

    bilang (nama){
        console.info(`Hello ${nama}, nama saya Karyawan ${this.namaDepan}`)
    }
}
class Manager extends Karyawan{
    constructor(namaDepan, namaBelakang){
        super(namaDepan);
        this.namaBelakang = namaBelakang;
    }
    bilang (nama){
        console.info(`Hello ${nama}, nama saya Manager ${this.namaDepan}`)
    }
}

const budi = new Karyawan("Budi");
budi.bilang("Joko")
const eko = new Manager("Eko", "Khannedy");
eko.bilang("Joko")

console.log(budi);
console.log(eko);
