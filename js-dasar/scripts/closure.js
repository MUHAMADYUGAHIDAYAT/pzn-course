function createAdder(value){
    const owner = "Yuga";

    function add(param){
        console.log(owner)
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);
// function addTwp(param){
//     console.log("Yuga");
//     return 2 + param;
// }
console.log(addTwo(10));

function penjumlahan(){
    let hitung = 0;

    function tambah(){
        hitung++;
        console.info(hitung);
        return
    }

    function kurang(){
        hitung--;
        console.info(hitung);
        return
    }


    tambah();
    kurang();
    return hitung
}
penjumlahan();





const hasil = penjumlahan();

function kalkulator(value){
    let hitung = value

    function tambah(nilai){
        hitung += nilai; 
        console.info(hitung)
        return
    }
    function kurang(nilai){
        hitung -= nilai
        console.info(hitung)
        return
    }

    function lihat(){
        console.info(`hasil nya adalah ${hitung}`);
    }

    return{ tambah, kurang, lihat}
}

const hitung2 = kalkulator(10)
hitung2.tambah(5);
hitung2.kurang(3);
hitung2.lihat();