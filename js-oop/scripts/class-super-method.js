class Paint{
    paint(){
        console.log("Paint Shape");
    }
}

class Circle extends Paint{
    paint(){
        super.paint()
        console.log("Paint Circle");
    }
}

const circle = new Circle();
circle.paint()

{
    console.log("Soal 1");
    class Kalkulator{
        tambah(a, b){
            return a + b;
        }
    }
    class KalkulatorSuper extends Kalkulator{
        tambah(a, b){
            super.tambah();
            console.log("Penambahan Dilakukan");
            return a + b;
        }
    }

    const calc = new KalkulatorSuper();
    console.log(calc.tambah(5, 3))

}
{
    console.log("Soal 2");
    class Pesan {
        salam(){
            return "Halo";
        }
    }

    class PesanRamah extends Pesan {
        salam(){
            return super.salam() + ", Apa Kabar?"
        }
    }
    const pesan = new PesanRamah();
    console.log(pesan.salam());
}

{
    console.log("Soal 3");
    class Robot {
        aktivasi(){
            return "Membersihkan rumah.";
        }
    }

    class RobotSuper extends Robot{
        laporanHarian(){
            return "Hari ini: " + super.aktivasi();
        }
    }

    const robot = new RobotSuper();
    console.log(robot.laporanHarian());
}
{
    console.log("Soal 4");
    class Kendaraan {
        info(){
            return "Alat transportasi";
        }
    }
    class Mobil extends Kendaraan {
        info(){
            return super.info() + " Beroda 4";
        }
    }

    class MobilListrik extends Mobil {
        info(){
            return super.info() + " Bertenaga Baterai";
        }
    }

    const tesla = new MobilListrik();
    console.log(tesla.info());
}
{
    console.log("Soal 5");
    class BankAccount{
        constructor(saldoAwal){
            this.saldoAwal = saldoAwal;
        }
        tarik(jumlah){
            if (this.saldoAwal < jumlah) {
                console.log("Maaf Saldo anda tidak mencukupi untuk penarikan");;
                return this.saldoAwal;
            }

            if (this.saldoAwal >= jumlah){
                this.saldoAwal -= jumlah;
                console.log(`Saldo Anda berkurang sebesar Rp. ${jumlah.toLocaleString("id-ID")}`)
                return `sisa saldo Rp. ${this.saldoAwal.toLocaleString("id-ID")}`
            }
        }
    }

    class BankAccountVIP extends BankAccount {
        constructor (saldo){
            super(saldo);
        }
        tarik(jumlah){
            super.tarik(jumlah);

            if (jumlah > 5000 && this.saldoAwal >= jumlah){
                this.saldoAwal += 100;
                console.log(`Anda Dapat Bonus Penarikan senilai Rp. 100`);
                return `sisa saldo Rp. ${this.saldoAwal.toLocaleString("id-ID")}`
            } else {
                return `sisa saldo Rp. ${this.saldoAwal.toLocaleString("id-ID")}`
            }
            
        }
    }

    const vipACC = new BankAccountVIP(100000);
    console.log(vipACC.tarik(5000));
    console.log(vipACC.tarik(6000));
    console.log(vipACC.tarik(10000));
    console.log(vipACC.tarik(5000));
    console.log(vipACC.tarik(500000));
}
{
    console.log("Soal 6");
    class User {
        constructor (username, password){
            this.username = username;
            this.password = password;
        }

        login(password){
            if (password === this.password ){
                return true;
            } else {
                return false;
            }
        }
    }
    class Admin extends User {
        constructor(a, b){
            super(a, b);
        }
        login(password){
            const hasilPW = super.login(password);
            if (hasilPW ){
                console.log("Logging in");
                console.log("Acces Granted");
                return `Selamat Datang ${this.username}`;
            } else {
                console.log("Logging in");
                console.log("Acces Denied")
                return `Password ${password} yang anda masukan salah`;
            }
        }
    }
    const admin = new Admin("Raffi", 2323);
    console.log(admin.login(1212));
    console.log(admin.login(2323));
}
{
    console.log("Soal 7");
    class Produk {
        constructor(nama, harga){
            this.nama = nama;
            this.harga = harga;
            
        }
        get info(){
            return "Produk : " + this.nama;
        }
    }
    class ProdukDiskon extends Produk {
        constructor (a, b, diskon){
            super(a, b);
            this.diskon = diskon;
        }
        get info(){
            return super.info + " Harga : " + (this.harga - this.diskon) 
        }
    }
    const laptop = new ProdukDiskon("Laptop", 1000000, 150000);
    console.log(laptop.info)
}
{
    console.log("Soal 8");
    class DataBase {
        query(sql){
            return "Hasil : " + sql;
        }
    }
    class DataBaseSecure extends DataBase {
        query(sql){
            return super.query("SECURE_" + sql);
        }
    }

    class DataBaseLog extends DataBaseSecure {
        query(sql){
            return super.query("LOG_" + sql);
        }
    }

    const db = new DataBaseLog();
    console.log(db.query("SELECT * FROM users"));
}
