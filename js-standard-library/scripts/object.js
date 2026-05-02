{
    console.info("Object Freeze & Seal")
    const orang = {
    namaDepan: "Eko",
    namaBelakang: "khannedy"
};

// Object.freeze(orang); //tidak bisa di ubah tidak bisa di hapus tidak bisa di tambah
Object.seal(orang); // bisa di ubah tidak bisa di hapus tidak bisa di tambah

orang.namaDepan = "Budi";
orang.namaTengah = "Kurniawan";
delete orang.namaBelakang;

console.log(orang);
}
{
    console.info("Object Assign");
    
    const target = {
        namaDepan: "Muhamad"
    };
    const source = {
        namaDepan: "Taufik",
        namaBelakang: "Hidayat"
    }

    Object.assign(target, source);

    console.log(target);
    console.log(source);
}
{
    console.info("Object Property Name & Value");
    const orang = {
        namaDepan: "Muhamad",
        namaBelakang: "Hidayat"
    };
    
    console.info(Object.getOwnPropertyNames(orang))
    console.info(Object.values(orang))
}