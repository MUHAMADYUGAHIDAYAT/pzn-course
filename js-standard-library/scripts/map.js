const map =  new Map();
map.set("Nama", "Muhamad Yuga");
map.set("Asal", "Indonesia");

console.info(map);
console.info(map.get("Nama"));
console.info(map.get("Asal"));
console.info(map.get("Hobi"));

for (const maps of map){
    console.info(`${maps[0]} : ${maps[1]}`);
}

map.forEach((a, b) => console.log(`${b} : ${a}`));