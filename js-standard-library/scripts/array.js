{
    console.log("Array Loop")
    const array = ["Muhamad", "Yuga", "Hidayat"];

    array.forEach(function (value, index){
        console.log(`${index} : ${value}`)
    });

    array.forEach((value, index) => console.log(`${index} : ${value}`));
    array.forEach(value=> console.log(value));
}

{
    console.log("Array Queue")
    const queue = [];
    
    queue.push("Muhamad");
    queue.push("Yuga");
    queue.push("Hidayat");
    console.log(queue);

    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue);

}
{
    console.log("Aray Stack");
    const stack = [];

    stack.push("M");
    stack.push("Raffi");
    stack.push("Maulana");
    stack.push("Yusuf");

    console.log(stack)
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());

    console.log(stack);
}
{
    console.log("Array Search");

    const source = [1,2,3,4,5,1,2,3,4,5];

    console.log(source.find(value => value > 3));
    console.log(source.findIndex(value => value > 3));
    console.log(source.includes(7));
    console.log(source.includes(5));
    console.log(source.indexOf(5));
    console.log(source.lastIndexOf(5));
}
{
    console.log("Array Filter");
    const number = [1,2,3,4,5,6,7,8,9,10];

    const ganjil = number.filter(value => value % 2 === 1);
    const genap = number.filter(value => value % 2 === 0);

    console.log(number);
    console.log(ganjil);
    console.log(genap);

}
{
    console.log("Array Transform");

    const nama = "Muhamad Yuga Hidayat" .split(" ");
    const namaHurufBesar = nama.map(value => value.toUpperCase());
    console.log(namaHurufBesar);

    const namaReduce = nama.reduce((before, value) => before + "  " + value);
    console.info(namaReduce)

    const namaRight = nama.reduceRight((before, value) => before + "  " + value);
    console.log(namaRight)

    const nomor = [1,2,3,4,5,6,7,8,9,10];
    const totalString = nomor.join(" + ");
    const total = nomor.reduce((before, value) => before + value);
    console.log(`${totalString} = ${total}`);
}

{
    console.info("Soal 1");
    const angka = [1,2,3,4,5,6,7,8,9,10];
    const genap = angka.filter(value => value % 2 === 0) ;
    console.log(genap);
}
{
    console.info("Soal 2");
    const angka = [2,3,4,5];
    const kuadrat = angka.map(value => value ** 2);
    console.log(kuadrat);
}
{
    console.info("Soal 3");
    const angka = [10, 20, 30, 40];
    const total = angka.reduce((before, value) => before + value);
    console.log(total);
}
{
    console.info("Soal 4");
    const  buah = ["apel", "jeruk", "mangga"];
    buah.forEach((nama, i) => {
        console.log(`Buah: ${nama}`);
    });
}
{
    console.info("Soal 5");
    const angka = [1,2,3,4,5];
    const potongan = angka.slice(1, 3);
    console.log(potongan);
}
{
    console.info("Soal 6");
    const angka = [10, 20, 30, 40];
    angka.splice(1, 2, 50, 60);
    console.log(angka);
}
{
    console.info("Soal 7");
    const buah = ["jeruk", "apel", "mangga"];
    const index = buah.findIndex(a => a === "apel");
    console.log(index);
}
{
    console.info("Soal 8");
    const angka = [3, 1, 4, 2];
    const hasil = angka.sort((a, b) => a - b).reverse();
    console.log(hasil);
}
{
    console.info("Soal 9");
    const angka =  [3, 6, 9];
    const semuaLebihlima = angka.every(a => a > 5);
    const adaLebihNol = angka.some(a => a > 10);
    console.log(semuaLebihlima);
    console.log(adaLebihNol)
}
{
    console.info("Soal 10");
    const array = [[1,2], [3,4], [5]];
    const hasil = array.flat(1);
    console.log(hasil);
}