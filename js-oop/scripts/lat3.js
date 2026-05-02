{
    console.log("Soal 1");
    class PersegiPanjang {
        constructor(panjang, lebar){
            this.panjang = panjang;
            this.lebar = lebar;
        }

        hitungLuas(){
            return this.panjang * this.lebar;
        }
        hitungKeliling() {
            return 2 * (this.panjang + this.lebar);
        }
    }

    const persegi = new PersegiPanjang(5, 3);
    console.log(persegi.hitungLuas());
    console.log(persegi.hitungKeliling());
}
{
    console.log("Soal 2");
        class PersegiPanjang {
        constructor(panjang, lebar){
            this.panjang = panjang;
            this.lebar = lebar;
        }

        hitungLuas(){
            return this.panjang * this.lebar;
        }
        hitungKeliling() {
            return 2 * (this.panjang + this.lebar);
        }
    }

    class Kubus extends PersegiPanjang {
        constructor(sisi){
            super(sisi, sisi);
            this.sisi = sisi;
        }

        hitungVolume(){
            return this.sisi ** 3;
        }
    }
    const kubus = new Kubus(4);
    console.log(kubus.hitungVolume());
}
{
    console.log("Soal 3");
    class AkunBank {
        #saldo = 0;
        get saldo(){
            return `Rp. ${this.#saldo.toLocaleString("id-ID")}`
        }

        set setor(value){
            if (value > 0){
                this.#saldo += value;
            } else {
                throw new Error("minimal setor diatas 0")
            }
        }

        set tarik(value){
            if(value < this.#saldo){
                this.#saldo -= value;
            } else {
                throw new Error(`saldo anda ${this.saldo} tidak cukup untuk melakukan penarikan sebesar Rp. ${value.toLocaleString("id-ID")}`)
            }
        }
    }
    const akun = new AkunBank();
    akun.setor = 1000000;
    akun.tarik = 300000;
    console.log(akun.saldo);
    try{
        akun.tarik = 800000;
    } catch (error){
        console.error(error.message);
    }
}
{
    console.log("Soal 4");
    class ProfileUser {
        role = "user";
        #email = "";

        set email(value){
            return this.#email = value;
        }
        get email(){
            const rahasia = Math.floor(this.#email.length * 0.3);
            return (
                this.#email.substring(0, rahasia) + "*".repeat(this.#email.length - rahasia)
            );
        }
    }
    const profil = new ProfileUser();
    profil.email = "user@example.com";
    console.log(profil.email);
}
{
    console.log("Soal 5");
    class ValidatePassword {
        #password = "";

        #validate(){
            if (this.#password.length < 8){
                throw new Error("Password harus 8 digits");
                
            }
            else if (!/[A-Z]/.test(this.#password)){
                throw new Error("Password Harus Memiliki Huruf besar");
                
            }
            else if (!/[0-9]/.test(this.#password)){
                throw new Error("Password harus memiliki angka");
            } else {
                console.log("Berhasil")
            }
            
        }

        setPassword(value){
            this.#password = value;
            this.#validate();
        }
    }
    const validator = new ValidatePassword();
    try {
        validator.setPassword("Weak123");
    } catch (error){
        console.error(error.message)
    }
    validator.setPassword("Strong@123");
}
{
    console.log("Soal 6");
    class PersegiPanjang {
        constructor(panjang, lebar){
            this.panjang = panjang;
            this.lebar = lebar;
        }

        hitungLuas(){
            return this.panjang * this.lebar;
        }
        hitungKeliling() {
            return 2 * (this.panjang + this.lebar);
        }
    }

    class Kubus extends PersegiPanjang {
        constructor(sisi){
            super(sisi, sisi);
            this.sisi = sisi;
        }

        hitungVolume(){
            return this.sisi ** 3;
        }
        
    }
}