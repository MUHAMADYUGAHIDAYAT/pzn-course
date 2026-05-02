export class Orang {
    
    constructor(nama){
        this.nama = nama;
    }

    bilangHello(nama){
        console.log(`Hello ${nama}, nama saya ${this.nama}`);
    }
}   