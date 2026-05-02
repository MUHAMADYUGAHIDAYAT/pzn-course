'use strict';
function useStrictMode(){
    'use strict'
    const person = {
        namaDepan: "Annonymous",
    };


    if(person.namaDepan === "Yuga") {
        console.info(`Hello Sir Yuga, Welcome Back`)
    } else {
        console.info(`Hello ${person.namaDepan}, Welcome`)
    }
}

useStrictMode();

// function tes(a, a) {
//     return a;
// }
// console.log(tes(1, 2));

const user = {
    nama: "Yuga",
}
user.umur = 20;

console.info(`Nama: ${user.nama}, Umur: ${user.umur}`);