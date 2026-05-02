const orang = {
    namaDepan: "Muhamad",
    namaTengah: "Yuga",
    get fullName(){
        return `${this.namaDepan} ${this.namaTengah}`;
    },

    // set fullName(value){
    //     const array = value.split(" ");
    //     this.namaDepan = array[0];
    //     this.namaTengah = array[1];
    // }

    set fullName(value){
        const [namaDepan, namaTengah] = value.split(" ");
        this.namaDepan = namaDepan;
        this.namaTengah = namaTengah;
    }
};

orang.fullName = "Dyo Nugroho";
orang.namaDepan = "Sir";
console.table(orang.fullName);

const buku = {
    judul: "",
    penulis: "",
    get info(){
        return `Judul:${this.judul}, Penulis${this.penulis}`;
    },
    set info(value){
        const [judul, penulis] = value.split(";");
        this.judul = judul;
        this.penulis = penulis;
    }
}

buku.info = "Laskar Pelangi;Andrea Hirata";
console.log(buku.info);

const film = {
    judul: "",
    tahun: "",

    get detail(){
        return `Judul: ${this.judul}, Tahun: ${this.tahun}`
    },

    set detail(isi){
    const [a, b] = isi.split("-");
    this.judul = a;
    this.tahun = b;
    },
};

film.detail = "inception-2010";
console.log(film.detail);