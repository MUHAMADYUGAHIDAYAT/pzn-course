class Karyawan {

}

class Manajer extends Karyawan{

}

const budi = new Karyawan();
const eko = new Manajer();

console.log(typeof budi);
console.log(typeof eko);

console.log(budi instanceof Karyawan);
console.log(budi instanceof Manajer);

console.log(eko instanceof Karyawan);
console.log(eko instanceof Manajer);

{
    console.log("Soal 1");
    class Kendaraan {

    }

    class Mobil extends Kendaraan{

    }

    const avanza = new Mobil();
    console.log(avanza instanceof Mobil);
    console.log(avanza instanceof Kendaraan);
    console.log(avanza instanceof Object);
    console.log(avanza instanceof Array);
}
{
    console.log("Soal 2");
    const tanggal = new Date();
    const bilangan = [1, 2, 3];

    console.log(tanggal instanceof Date);
    console.log(tanggal instanceof Object);
    console.log(bilangan instanceof Array);
    console.log(bilangan instanceof Object);
    console.log(bilangan instanceof Date);
}
// {
//     console.log("Soal 3");
//     const teksBiasa = "Hello";
//     teksObject = new String("Object");
//     console.log(teksBiasa)
// }