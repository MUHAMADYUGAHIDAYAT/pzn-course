function Employee(nama){
    this.nama = nama;
}
function Manager(nama){
    this.nama = nama;
}

// Manager.prototype = Employee.prototype; // salah
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.bilang = function (nama){
    console.log(`Hello ${nama}, nama saya adalah ${this.nama}. saya adalah Manager`)
}
Employee.prototype.bilang = function (nama){
    console.log(`Hello ${nama}, nama saya adalah ${this.nama}. saya adalah Karyawan`)
}

const karyawan = new Employee("Budi");
karyawan.bilang("Eko")
const manager = new Manager("Arif");
manager.bilang("Eko")

console.log(karyawan);
console.log(manager);