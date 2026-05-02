{
    class Customer {
    namaDepan;
    namaBelakang;

    constructor(){

    }
    bilaang(){
        
    }
}

const eko = new Customer();
eko.namaDepan = "Eko";
eko.namaBelakang = "Khannedy";
console.log(eko);
}

{
    class Customer {
    

    constructor(namaDepan, namaBelakang){
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    }
    bilaang(){

    }
}

const eko = new Customer("Eko", "Khannedys");
console.log(eko);
}
