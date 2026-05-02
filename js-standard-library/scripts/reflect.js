const orang ={};

Reflect.set(orang, "namaDepan", "Yuga");
Reflect.set(orang, "namaBelakang", "Hidayat");

console.info(orang);

console.info(Reflect.get(orang, "namaBelakang"))
console.info(Reflect.get(orang, "namaDepan"))

console.info(Reflect.has(orang, "namaDepan"))
console.info(Reflect.has(orang, "namaBelakang"))
console.info(Reflect.has(orang, "namaTengah"))