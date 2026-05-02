
// Destructuring Array
{
    const nama = ["Muhamad", "Yuga", "Hidayat", "Raffi Ayam"];
// const namaDepan = nama[0];
// const namaTengah = nama[1];
// const namaBelakang = nama[2];
const namaLengkap = `${nama[0]} ${nama[1]} ${nama[2]}`;

const [namaDepan, namaTengah, namaBelakang, ...lain] = nama;

console.info(namaDepan);
console.info(namaTengah);
console.info(namaBelakang);
console.info(namaLengkap);
console.info(lain);

}


// Destructuring Object
{
    const orang = {
    namaDepan: "Muhamad 2",
    namaTengah: "Yuga 2",
    namaBelakang: "Hidayat 2",
    address: {
        street: "Jl. Ki Merogan",
        city: "Palembang",
        country: "Indonesia"
    },
    hobby: "Game",
    channel: "Yuga Advance",
    }

    const {namaDepan, namaTengah, namaBelakang, address:{street, city, country}, ...lain} = orang;
    console.info(namaDepan);
    console.info(namaTengah);
    console.info(namaBelakang);
    console.info(street);
    console.info(city);
    console.info(country);
    console.info(lain);
}

// Destructuring didalam function parameter object
{
    function tampilkanOrang({namaDepan, namaTengah, namaBelakang}){
        console.log(namaDepan);
        console.log(namaTengah);
        console.log(namaBelakang);
    }

    const orang = {
        namaDepan: "Muhamad 3",
        namaTengah: "Yuga 3",
        namaBelakang: "Hidayat 3",
    };

    tampilkanOrang(orang);
}

// Destructuring didalam function parameter array
{
    function sum([pertama, kedua]){
        return pertama + kedua;
    }

    console.info(sum([1, 1]));
    console.info(sum([10, 10]));
}

// Destructing default value array
{
    const nama = ["Muhamad 4", "Yuga 4"];

    const [namaDepan, namaTengah, namaBelakang = "Hidayat 4"] = nama;
    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}

//Destructuring Deafault value object 
{
    const orang = {
    namaDepan: "Muhamad 5",
    namaBelakang: "Hidayat 5"

    }

    const {namaDepan, namaTengah = "Yuga 5", namaBelakang,} = orang;
    console.info(namaDepan);
    console.info(namaTengah);
    console.info(namaBelakang);
}

//Destructuring other varaible in object 
{
    const orang = {
    namaDepan: "Muhamad 6",
    namaBelakang: "Hidayat 6"

    }

    const {namaDepan: firstName, 
        namaTengah: middleName = "Yuga 6", 
        namaBelakang: lastName,} = orang;
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

// soal 
{
    const film = {
    judul: "inception",
    tahun: 2010,
    genre: "sci-fi",
}

const {judul: a, tahun: b} = film;
console.log(`Judul: ${a}, Tahun: ${b}`);
}

{
    const buah = ["apel", "mangga", "pisang"];

    const [a, b] = buah;
    console.log(`${a} ${b}`);
}
{
    const siswa = {
        nama: "budi",
    };

    const {nama: a, b = 18} = siswa;
    console.log(`Nama: ${a}, Umur: ${b}`);
}

{
    const user = {
        id: 1,
        profile: {
            nama: "Andi",
            alamat: {
                kota: "jakarta",
                negara: "Indonesia"
            }
        }
    };

    const {profile: {alamat: {kota: a}}} = user;
    console.log(`Kota: ${a}`);
}
{
    const film = {
        judul: "interstellar",
        tahun: 2014,
        genre: "Sci-fi",
    };

    const {judul: j, tahun: t} = film;
    console.log(`Judul: ${j}, Tahun: ${t}`);
}