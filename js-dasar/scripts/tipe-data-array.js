let arrayKosong = [];

let arrayNama = ["Yuga", "Hidayat", "Raffi", "adhit"];

const names = [];
names.push("Yuga");
names.push("Raffi", "Adhit");
names.push("Raihan", "Deka", "Diko");


console.table(names);
names.length;
names[0] = "Hidayat";

console.table(names);

delete names[3];

console.table(names);

names.push("Yuga lagi")

console.table(names);

names[3] = 1;

console.table(names);

names.push(1,2,3);
names.push("Ayam", "ikan", "Beruang")
console.table(names);
