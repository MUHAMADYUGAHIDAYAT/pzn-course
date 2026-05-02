{
    console.log("Soal 1");
    class Buku {
        constructor(judul, pengarang){
            this.judul = judul;
            this.pengarang = pengarang;
            this.tahunTerbit = 2025;
        }

        getInfo(){
            return `${this.judul} oleh ${this.pengarang}, terbit: ${this.tahunTerbit}`;
        }
    }

    const buku = new Buku("Harry Potter", "J.K. Rowling");
    console.log(buku.getInfo())
}
{
    console.log("Soal 2");
    class Buku {
        constructor(judul, pengarang){
            this.judul = judul;
            this.pengarang = pengarang;
            this.tahunTerbit = 2025;
        }

        getInfo(){
            return `${this.judul} oleh ${this.pengarang}, terbit: ${this.tahunTerbit}`;
        }
    }

    class BukuDigital extends Buku {
        constructor(a, b, format = "PDF"){
            super(a, b);
            this.format = format;
        }

        getInfo(){
            return super.getInfo() + `, format: ${this.format}`;
        }
    }
    const ebook = new BukuDigital("Clean Code", "Robert Martin", "EPUB");
    console.log(ebook.getInfo());
}
{
    console.log("Soal 3");
        class Buku {
        constructor(judul, pengarang){
            this.judul = judul;
            this.pengarang = pengarang;
            this.tahunTerbit = 2025;
        }

        getInfo(){
            return `${this.judul} oleh ${this.pengarang}, terbit: ${this.tahunTerbit}`;
        }
    }

    class BukuDigital extends Buku {
        constructor(a, b, fileSize){
            super(a, b);
            this.fileSize = fileSize;
        }
    }

    const ebook = new BukuDigital("Refractoring", "Martin Fowler", 5.2);
    console.log(ebook.fileSize);
}
{
    console.log("Soal 4");
    class Akun {
        #saldo = 0;

        get saldo(){
            return `Rp ${this.#saldo.toLocaleString("id-ID")}`;
        }

        set setor(value){
            this.#saldo += value;
        }
        set tarik(value){
            if (value > this.#saldo){
                throw new Error(`Saldo yang ingin di tarik tidak cukup!, anda tidak dapat melakukan pernarikan sebesar Rp ${value.toLocaleString("id-ID")} dikarenakan sisa saldo anda hanya ${this.saldo}`);
            } else {
                this.#saldo -= value;
            }
        }
    }
    const akun = new Akun();
    akun.setor = 500000;
    akun.tarik = 200000;
    console.log(akun.saldo);
    try {
        akun.tarik = 400000;
    } catch(error){
        console.error(`Error Penarikan dana : ${error.message}`);
    }
    console.log("==============================================================");
}
{
    console.log("Soal 5");
    class Suhu {
        #celsius = this.celsius;
        unit = "Celsius";

        set celsius(value){
            this.#celsius = value;
        }

        get farenhit(){
            return this.#celsius + 52;
        }
    }

    const suhu = new Suhu();
    suhu.celsius = 25;
    console.log(suhu.farenhit);
}
{
    console.log("Soal 6");
    class Password {
        #value ="";


        setPassword(value){ 
            this.#value = value;
            this.#validate();
        }
        #validate (){
            if(this.#value.length < 7){
                throw new Error("Passowrd Sangat Lemah!");
            } else {
                console.log("Password Kuat");
            }
        }



    }
    const pw = new Password();
    try {
        pw.setPassword("weak");
    } catch (error){
        console.error(error.message);
    }
    pw.setPassword("Str0ng!@");
}