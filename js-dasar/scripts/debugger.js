function createFullName (namaDepan, namaTengah, namaBelakang){
    debugger;
    const fullName = `${namaDepan} ${namaTengah} ${namaBelakang}`;
    return fullName;
}

const nama = createFullName("Muhamad", "Yuga", "Hidayat");
console.info(nama);

function sum(...numbers) {
    let total = 0
    for (const number of numbers){
        total += number;
    }
    return total;
}

console.info(sum(1, 1,1 ,1 ,1));