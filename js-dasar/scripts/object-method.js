// function bilangHello(name){
//         alert(`Hello ${name}`);
//     }

// const orang = {
//     nama: "Yuga",
//     bilang: bilangHello
// }

const orang = {
    nama: "Yuga",
}
orang.bilang = function(nama) {
    alert(`Hello ${nama}`);
}

// orang.bilang("Raihan");


const persegiPanjang = {
    luas: function(panjang, lebar){
        luas = panjang * lebar
        console.log(`Luas = ${panjang} x ${lebar} = ${luas}`);
    },
    keliling: function(panjang, lebar){
        keliling = 2 * (panjang + lebar)
        console.log(`Keliling = 2 x (${panjang} + ${lebar}) = ${keliling}`);
    }
}

persegiPanjang.luas(3, 4);
persegiPanjang.keliling(3, 4);

const mahasiswa = {
    status: function(nama, nilai){
        if (nilai >= 75) {
            console.log(`Selamat ${nama} anda lulus`);
        } else {
            console.log(`Maaf ${nama} anda tidak lulus`)
        }
    }
}
mahasiswa.status("raffi", 90);