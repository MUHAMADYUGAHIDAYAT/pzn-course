function* buatNama(){
    yield "Muhamad";
    yield "Yuga";
    yield "Hidayat";
}

const names = buatNama();
for (const name of names) {
    console.log(name);
}

function* buatGanjil(value){
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`Yeild ${i}`)
            yield i;
                        
        }
    }
}

function buatGanjilArray(value){
    const result = [];
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`Yeild ${i}`)
            result.push(i);
        }
    }
}

const angkaGanjil = buatGanjil(100);
// for (const ganjil of angkaGanjil){
//     console.log(ganjil);
// }
console.info(angkaGanjil.next().value);
console.info(angkaGanjil.next().value);
console.info(angkaGanjil.next().value);

