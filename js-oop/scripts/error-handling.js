class MathUtil{
    static sum(...nomors){
        if(nomors.length === 0){
            throw new Error("Nomor tidak boleh kosong");
        }

        let hasil = 0;
        for(const nomor of nomors){
            hasil += nomor;
        }
        return hasil;
    }
}
try {
    console.log(MathUtil.sum(1,2));
    console.log("Test");
} catch (error) {
    let i= 1;
    while (i <= 5){
        console.log(`${i} Awas Error: ${error.message}`);
        i++;
    }
} finally {
    console.log("Program Selesai");
}
console.log("YYoqwww");

class Hitung {
    #value = 1

    next(){
        try{
            return this.#value;
        } finally {
            this.#value++
        }
    }
}

const counter = new Hitung();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter)