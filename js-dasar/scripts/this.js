// console.log(this);

function sample(){
    console.info(this);
    function inner(){
        console.info(this);
    }
    inner();
}
// sample();

const orang = {
    nama: "Yuga",
    bilang: function(nama){
        console.info(`Hello ${nama} my name is ${this.nama}`);
    }
};
orang.bilang("Raffi");

const hewan = {
    nama: "Srigala",
    suara: function(suara){
        console.info(`suara ${this.nama} ${suara}`);
    }
};
hewan.suara("auuuuuuuuuuuuuuuuuuuuuuuuuu");

const user = {
    nama: "budiono siregar",
    perkenalkan: function(){
        console.log(`Perkenalkan nama saya ${this.nama} cita cita saya kapal lawt `)
    }
}
user.perkenalkan();