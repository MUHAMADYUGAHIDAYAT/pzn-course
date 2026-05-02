// OR || di operator logika non boolean
console.info("Hello" || "Hi");
console.info("" || []);
console.info(0 || "Nol");
console.info("0" || "Nol");
console.info(null || "NUll");
console.info(undefined || "UNdefined");
console.info(false || 0);
console.info(0 || false);

const orang = {
    namaDepan: "Muhamad",
    namaTengah: "Yuga",
}

const nama = orang.namaDepan || orang.namaTengah;
console.info(nama);

console.info("");
console.info("");
console.info("");

// AND && di operator logika non boolean
console.info("Hello" && "Hi");
console.info("" && []);
console.info(0 && "Nol");
console.info("0" && "Nol");
console.info(null &&"NUll");
console.info(undefined && "UNdefined");
console.info(false && 0);
console.info(0 && false);
