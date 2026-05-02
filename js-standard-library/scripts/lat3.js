{
    console.log("Soal 1");
    const str = "21";
    const num = Number(str);
    console.log(num);
}
{
    console.log("Soal 2");
    const str = " hi ";
    console.log(str);
    const trim = str.trim();
    console.log(trim)
}
{
    console.log("Soal 3");
    const array = [1, 2, 3, 4, 5, 6];
    const genap = array.filter(n => n % 2 === 0);
    console.log(genap);

}
{
    console.log("Soal 4")
    const obj1 = {
        a: "2",
        b: "3"
    };
    const obj2 = {
        b: "6",
        c: "1"
    };

    const gabung = Object.assign(obj1, obj2);
    console.log(gabung)
    console.log(obj1)
}
{
    console.log("Soal 6");
    const num = BigInt(Number.MAX_SAFE_INTEGER);
    console.log(num)
}
{
    console.log("Soal 5");
    const data ={
        nama:"Yuga",
        umur: 21,
        Alamat: {
            Provinsi: "Sumsel",
            Kecamatan: "Kertapati",
        }
    }

    const json = JSON.stringify(data);
    console.log(json);
    const jsonObject = JSON.parse(json);
    console.log(jsonObject)
}
{
    console.log("Soal 7");
    const date = new Date();
    const dateD = date.toISOString().split("T")
    console.log(dateD);
}
{
    console.log("Soal 8");
    const num = [1,2,3,4,5,6,7,8,9,10];
    const numM = Math.floor(Math.random() * num.length);
    const numF = num[numM];
    console.log(numF)

}
{
    console.log("Soal 9");
    function boolean(value){
        if (typeof value === "boolean"){
            console.log(`${value} adalah boolean`);
        } else {
            console.log(`${value} bukan boolean`)
        }
    }

    boolean(true);
    boolean(false);
    boolean("true");

}
{
    console.log("Soal 10");
    const map = new Map();
    map.set("Nama", "Raffi");
    map.set("Asal", "Palembang");
    console.log(map.get("Nama"));
    console.log(map.get("Asal"));
}
{
    console.log('Soal 11');
    const set = new Set();
    set.add("M");
    set.add("Raffi");
    set.add("Maulana");
    set.add("Yusuf");

    console.log(set.has("Maulana"));
    set.forEach(a => console.log(a));
}
{
    console.log("Soal 12");
    const namaDepan = Symbol("namaDepan");
    const namaTengah = Symbol("namaTengah");
    const orang = {};
    orang[namaDepan] = "m"
    orang[namaTengah] = "Yuga"
    console.log(orang);

}
{
    console.log("Soal 13");
    const str = "ada 9 ikan di kolam dan 8 pisang di kotak";
    const regex = /[0-9]/g
    console.log(str.match(regex))
}
{
    console.log("Soal 14");
    const target = {};
    const proxy = new Proxy(target, {
        get: function(target, property){
            console.log(`Access Property: ${property}`);
            return target[property];
        },
        set: function(target, property, value){
            console.log(`Change Property ${property} : ${value}`);
            return target[property] = value;
        }
    });

    proxy.namaDepan = "Yuga"
    proxy.namaDepan = "raffi"
    proxy.namaDepan = "adhitya"
    proxy.namaBelakang = "Pangestu";
    console.log(proxy);
}
{
    console.log("Soal 15");
    
}
