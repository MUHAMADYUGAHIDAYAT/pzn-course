class orang {
    constructor(namaDepan, namaBelakang){
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    }
    
    get namaLengkap(){
        return `${this.namaDepan} ${this.namaBelakang}`;
    }

    set namaLengkap(value){
        const hasil = value.split(" ");
        this.namaDepan = hasil[0];
        this.namaBelakang = hasil[1];
    }
}

const raffi = new orang("Raffi",  "Yusuf");
console.log(raffi);
console.log(raffi.namaLengkap);

raffi.namaLengkap = "Dyo Nugroho";
console.log(raffi);
console.log(raffi.namaLengkap);
{
    class PersegiPanjang {
        
    }
}