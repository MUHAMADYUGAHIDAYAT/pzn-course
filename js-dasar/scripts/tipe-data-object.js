const person = {
    "nama lengkap" : "Muhamad Yuga Hidayat",
    negara_asal : "Indonesia",
    umur : 20,
};

// person["nama"] = "Muhamad Yuga Hidayat";
// person["negara"] = "indonesia";
// person["umur"] = 20;

console.info(`Nama : ${person["nama lengkap"]}`);
console.info(`Negara Asal : ${person.negara_asal}`);
console.info(`Umur : ${person.umur}`);

console.table(person);

delete person["umur"];

console.table(person);
person["status"] = "Mahasiswa";
console.table(person);

