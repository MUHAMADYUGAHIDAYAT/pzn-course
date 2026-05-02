class Orang {

    bilang(nama){
        if(nama){
            this.#bilangDenganNama(nama);
        } else {
            this.#bilangTanpaNama();
        }
    }

    #bilangTanpaNama(){
        console.log("Hello");
    }

    #bilangDenganNama(nama){
        console.log(`Hello ${nama}`);
    }
}
const eko = new Orang();
eko.bilang("joko");
eko.bilang();

{
    console.log("Soal 1");
    class User {
        #email;
        role = "user";
        get email(){
            return this.#email;
        }

        set email(value){
            if(!value.includes("@")){
                throw new Error ("Email tidak valid");
            }
            this.#email = value;
        }
    }
    const user = new User();
    user.email = "gasdad@contoh.com";
    console.log(user.email)
}
{
    console.log("Soal 2");
    class Counter {
        instanceCount = 0;
        #count = 0;

        increment(){
            this.#count++;
            this.instanceCount++;
        }

        get count(){
            return this.#count;
        }
    }

    const c1 = new Counter();
    c1.increment();
    console.log(c1.instanceCount);
    console.log(c1.count);
}
{
    console.log("Soal 3");
    class PasswordValidator{
        #validate(password){
            if(password.length < 7 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)){
                return "Lemah";
            } else {
                return "Kuat";
            }
        }

        validate(password){
            return this.#validate(password);
        }
    }

    const validator = new PasswordValidator();
    console.log(validator.validate("AbcD1"));
}
{
    console.log("Soal 4");
    class Produk {
        #nama = "";
        #harga = 0;

        taxRate = 0;

        set harga(value){
            this.#harga = value;
        }
        get harga(){
            return this.#harga
        }
        set diskon(persentase){
            this.taxRate = persentase / 1000;
        }

        get diskon(){
            return this.taxRate
        }

        get hargaBersih(){
            return  this.#harga * (1- this.diskon);
        }
    }

    const laptop = new Produk();
    laptop.harga = 1000000
    laptop.diskon = 10;
    console.log(laptop.hargaBersih);
}