
const orang = {
    nama: "Yuga",
    bilang: (nama)=>{
        console.info(this);
        console.log(`Hello ${nama} My name is ${this.nama}`);
    }
}

orang.bilang("raffi");

const mahasiswa = {
    nama: "dyo",
    perkenalan: function(){
        console.log(`Hello, nama saya ${this.nama}`);
    },
    arrowPerkenalan: () => {
        console.log(`Hello, nama saya ${this.nama}`);
    },
}
mahasiswa.perkenalan();
mahasiswa.arrowPerkenalan();


// const kalkulator = {
    
//     tambah: function(satu, dua){
//         hasil = satu + dua;
//         console.info(`${satu} + ${dua} = ${hasil}`);
//     },
//     kali: (satu, dua)=> {
//         hasil = satu * dua;
//         console.info(`${satu} x ${dua} = ${hasil}`);
//     }
// }
// kalkulator.tambah(3, 4);
// kalkulator.kali(3, 4);

// const kalkulator = {
    
//     tambah: function(satu, dua){
//         hasil = satu + dua;
//         return (`${satu} + ${dua} = ${hasil}`);
//     },
//     kali: (satu, dua)=> {
//         hasil = satu * dua;
//         return (`${satu} x ${dua} = ${hasil}`);
//     }
// }
// console.log(kalkulator.tambah(3, 4));
// console.log(kalkulator.kali(3, 4));


// let hasil = 0;

// class kalkulator {
//     constructor(){
//         this.hasil = 0;
//     }

//     tambah(a, b){
//         this.hasil = a + b;
//         return this.hasil;
//     }
//     kurang(a, b){
//         this.hasil = a - b;
//         return this.hasil;
//     }
//     kali(a, b){
//         this.hasil = a * b;
//         return this.hasil;
//     }
//     bagi(a, b){
//         this.hasil = a / b;
//         return this.hasil;
//     }
// }


// class kalkulatorInti extends kalkulator {
//     tambah(a, b){
//         const nilai = super.tambah(a, b);
//         hasil = nilai;
//         return nilai;
//     }
//     kurang(a, b){
//         const nilai = super.kurang(a, b);
//         hasil = nilai;
//         return nilai;
//     }
//     kali(a, b){
//         const nilai = super.kali(a, b);
//         hasil = nilai;
//         return nilai;
//     }
//     bagi(a, b){
//         const nilai = super.bagi(a, b);
//         hasil = nilai;
//         return nilai;
//     }
// }

// hasil = 2;
// const test = new kalkulatorInti();
// test.tambah(3, 3);
// // document.writeln(`<p>${hasil}</p>`);
// console.log(`<p>${hasil}</p>`);
// test.kurang(3, 3);
// console.log(`<p>${hasil}</p>`);
// test.kali(3, 3);
// // document.writeln(`<p>${hasil}</p>`);
// console.log(`<p>${hasil}</p>`);
// test.bagi(3, 3);
// // document.writeln(`<p>${hasil}</p>`);
// console.log(`<p>${hasil}</p>`);

// let hasil = -3;
// function kalkulator(satu, dua){
//     return hasil += satu + dua;
    
// }

// kalkulator(3, 3);
// document.writeln(hasil);