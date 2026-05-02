function Karyawan(namaDepan){
    this.namaDepan = namaDepan;
    this.bilang = function (nama){
        console.log(`Hello ${nama}, nama saya ${this.namaDepan}`);
    }
}
function Manager(namaDepan, namabelakang){
    this.namabelakang = namabelakang;
    Karyawan.call(this, namaDepan);
}

const yuga = new Manager("Muhamad", "Yuga");
console.log(yuga)
yuga.bilang("Adhit");