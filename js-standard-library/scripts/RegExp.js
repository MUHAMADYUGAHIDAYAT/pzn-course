{
    // create regex

    const regex1 = /eko/;

    const regex2 = new RegExp("eko");
    const regex3 = new RegExp(/eko/);
}
{
    // test ragex

    const nama = "eko kurniawan eko khannedy";
    const regex = /eko/

    const result = regex.exec(nama);
    console.log(result);
    console.info(regex.exec("tidak ada"))

    const test = regex.test(nama)
    console.log(test)
    console.log(regex.test("tidak ada"))
}
{
    // flag regex
    const nama = "Muhamad Yuga Hidayat\nm Raffi Maulana\nM Adhitya Pangestu ";
    const regexY = /^m.a/igm
    const regexR = /raffi/ig

    let result;
    while((result = regexY.exec(nama)) !== null){
        console.info(result)
    }
    while((result = regexR.exec(nama)) !== null){
        console.info(result)
    }
}

{

    class Password{
        #password = "";
        set inputPassword(pass){
            this.#password = pass;
        }
        get inputPassword(){
            return this.#password;
        }
    }

    class Validator extends Password{

        validate(){
            let pass = super.inputPassword;
            if (pass.length < 8){
                console.log("Panjang Password harus 8 huruf/angka")
                this.inputPassword = "";
                return
            }else if (!/[0-9]/.test(pass)){
                console.log("Password Harus memiliki angka");
                this.inputPassword = "";
                return 
            } else if (!/[A-Z]/.test(pass)){
                console.log("Password harus memiliki Huruf kapital");
                this.inputPassword = "";
                return 
            } else {
                console.log("Password valid")
                return true;

            }
        }
    }
    const pass = new Validator();
    pass.inputPassword = "Test12zxc";
    pass.validate();
    console.log(pass);
    if (pass.validate()){
        console.log("Selamat Datang");
    } else {
        console.log("Password Yang anda masukan tidak valid!")
    }
}
const Ac = "Assasin Creed";
const test = /[a]/gm

let hasil;
while ((hasil = test.exec(Ac)) !== null ){
    console.log(hasil)

}
{
    //advance regex

    const regex = /ek[ioaeu]/ig
    const nama = "eko eki ek eku eke edo eko eki"
    let result;
    while ((result = regex.exec(nama)) !== null){
        console.log(result);
    }
}
{
    const nama = "edo eko eki ek eku eke edo eko eki"

    console.info(nama.match(/ek[aiueo]/ig));
    console.info(nama.search(/ek[aiueo]/ig));
    console.info(nama.replace(/ek[aiueo]/i, "kamu"));
    console.info(nama.replaceAll(/ek[aiueo]/ig, "kamu"));
    console.info(nama.split(/e/ig));

}
{
    console.log("Soal 1");
    const email = "user@example.com";
    const regex = /@/

    console.log(regex.test(email));
}

{
    console.log("Soal 2");
    const nomor = "0812-1234-5678";
    const regex = /08/
    console.log(regex.test(nomor))
}
{
    console.log("Soal 3");
    const password = "Password123";
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    console.log(regex.test(password))
}
{
    console.log("Soal 4");
    const str = "Nomor: 12345";
    const regex = /\d/g;
    console.log(str.match(regex));
}
{
    console.log("Soal 5");
    const str = "Nama Lengkap";
    const regex = / /g
    console.log(str.replace(regex, "_"));
}
{
    console.log("Soal 6");
    const url = "https://example.com";
    const regex = /http/;
    console.log(regex.test(url))

}
{
    console.log("Soal 7");
    const str = "15-08-2025";
    const regex =/^(0[1-9]|[12][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
    console.log(str.match(regex));
}
{
    console.log("Soal 8");
    const str = "Belajar JavaScript sangat menyenangkan!";
    const regex = /javascript/i
    console.log(str.match(regex));
}
{
    console.log("Soal 9");
    const nik = "1234567890123456";
    const regex = /\d{16}/;
}
{
    console.log("Soal 10");
    const str = "Nama: John, Umur: 25";
    const regex = /^\D([a-z]) \d([0-9]) /;
    console.log(str.match(regex))
}