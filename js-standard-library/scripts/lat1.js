{
    console.info("Soal 1");
    const angka = [10, 20, 30, 40, 50];
    const hasil = angka.filter(n => n > 25).map(n => n + 5);
    console.log(hasil);
}
{
    console.info("Soal 2");
    const angka = [15, 25, 35, 45];
    const total = angka.reduce((sum, n) => {
        return (n % 5 === 0) ? sum + n : sum;
    })
    console.log(total);
}
{
    console.info("Soal 3");
    const buah = ["apel", "jeruk", "mangga"];
    const adaJeruk = buah.includes("jeruk");
    console.log(adaJeruk);
}
{
    console.info("Soal 4");
    const orang = [
        {nama : "Budi", umur: 25 },
        {nama: "Ani", umur: 20}
    ];

    const hasil = orang.sort((a, b) => a.umur - b.umur);
    console.log(hasil);
}

{
    console.info("Soal 5");
    const array = [[1,2], [3,4], [5]];
    const hasil = array.flat(1).map(n => n + 10);
    console.log(hasil);
}

{
    console.info("Soal 6");
    const angka = [10, 20 ,30];
    const adaLebihLima = angka.every(n => n > 5);
    const adaLebihDariDuaLima = angka.some(n => n > 25);
    console.log(adaLebihLima);
    console.log(adaLebihDariDuaLima);
}
{
    console.info("Soal 7");
    const data = [
        {kategori: "makanan", harga: 10000},
        {kategori: "minuman", harga: 5000},
        {kategori: "makanan", harga: 15000}
    ];

    const hasil = data.reduce((acc, item) => {
        if (!acc[item.kategori]){
            acc[item.kategori] = 0;
        }
        acc[item.kategori] += item.harga;
        return acc
    },{});
    console.log(hasil);
}
{
    console.info("Soal 8");
    const orang = [
        {nama : "John", usia: 25},
        {nama : "Jane", usia: 17}
    ]
    const hasil = orang.filter(o => o.usia >= 18).map(o => o.nama + ` (${o.usia})` );
    console.log(hasil);
}
{
    console.info("Soal 9");
    
}

{
    console.info("Soal 1")
    const angka = [2,3,4,5,6];
    const genap = angka.filter(n => n % 2 === 0);
    console.log(genap);
}
{
    console.info("Soal 2");
    const angka = [1, 2, 3];
    const kuadrat = angka.map(n => n ** 2);
    console.log(kuadrat);
}
{
    console.info('Soal 3');
    const angka = [10, 20, 30];
    const total = angka.reduce((a, b) => a + b);
    console.log(total);
}
{
    console.info("Soal 4");
    const buah = ["apel", "jeruk"];
    const adaApel = buah.includes("apel");
    console.log(adaApel);
}
{
    console.info("Soal 5");
    const angka = [5, 2, 8];
    const hasil = angka.sort((a, b )=> a - b);
    console.log(hasil);
}
{
    console.info("Soal 6");
    const angka = [1, 2, 3, 4, 5];
    const hasil = angka.find(a => a > 3);
    console.log(hasil);
}
{
    console.info("Soal 7");
    const angka = [ 2, 4, 6];
    const semuaGenap = angka.every(a => a % 2 === 0);
    console.log(semuaGenap);
}
{
    console.info("Soal 8");
    const angka = [3, 6, 2];
    const adaLebihLima = angka.some(a => a > 5);
    console.log(adaLebihLima)
}
{
    console.info("Soal 9");
    const huruf = ["a", "b", "c"];
    const hasil = huruf.join("-");
    console.log(hasil);
}
{
    console.info("Soal 10");
    const angka = [1, 2, 3, 4];
    const duaPertama = angka.slice(0, 2);
    console.log(duaPertama)
}