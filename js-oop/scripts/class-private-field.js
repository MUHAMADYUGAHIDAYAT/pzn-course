class Hitung {
    #hitung = 0;

    tambah(){
        this.#hitung++;
    }

    kurang(){
        this.Hitung--;
    }

    get (){
        return this.#hitung;
    }
}

const hitung = new Hitung();
hitung.tambah()
hitung.tambah()
hitung.tambah()
hitung.tambah()
hitung.tambah()
console.log(hitung.get());

console.log(hitung);


