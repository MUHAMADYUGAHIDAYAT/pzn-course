const orang = {
    namaDepan : "Muhamad",
    namaTengah: "Yuga",
    namaBelakang: "Khannedy",
    alamat: {
        negara: "Indonesia",
        kota: "Palembang"
    },
    hobi: [
        "Coding", "Game", "Music"
    ]
};

const json = JSON.stringify(orang);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject)