class Karyawan  {

    bilang (nama){
        console.info(`Hello ${nama}, nama saya Karyawan ${this.nama}`)
    }
}
class Manager extends Karyawan{

    bilang (nama){
        console.info(`Hello ${nama}, nama saya Manager ${this.nama}`)
    }
}

const budi = new Karyawan();
budi.nama = "Budi"
budi.bilang("Joko")
const eko = new Manager();
eko.nama = "Eko"
eko.bilang("Joko")

console.log(budi);
console.log(eko);
