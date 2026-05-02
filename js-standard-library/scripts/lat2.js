{
    console.info("Soal 1");
    const orang = {
        nama: "john",
        usia: 25
    };

    const key =Object.keys(orang);
    console.log(key)
}

{
    console.info("Soal 2");
    const obj1 ={a: 1, b: 2};
    const obj2 ={c: 3};
    const gabungan = Object.assign(obj1, obj2);
    console.log(gabungan);
}

{
    console.info("Soal 3");
    const obj = {a: 1, b: 2};
    const entries = Object.entries(obj);
    console.log(entries)
}

{
    console.info("Soal 4");
    const orang ={nama: "John"};
    const adaNama = Object.hasOwn(orang, "nama");
    console.log(adaNama)
}

{
    console.info("Soal 5");
    const prototype = {umur: 30};
    const orang = Object.create(prototype);
    orang.nama = "John";

    console.log(orang);
}
{
    console.info("Soal 6");
    const obj ={a: 1};
    Object.freeze(obj);
    obj.a = 2;
    console.log(obj.a);
}
{
    console.info("Soal 7");
    const obj = {a: 1, b: 2};
    const nilai = Object.values(obj);
    console.log(nilai)
}
{
    console.info("Soal 8");
    const arr = [["a", 1], ["b", 2]];
    const obj = Object.fromEntries(arr);

    console.log(obj);
}
{
    console.info("Soal 9");
    const orang = {nama: "John"};
    const wajib = Object.hasOwn(orang, "nama");
    console.log(wajib);
}
{
    console.info("Soal 10");
    const obj = {a: 1, b: 2};
    const salinan = Object.assign({}, obj);
    salinan.c = 3;
    console.log(salinan);
}


