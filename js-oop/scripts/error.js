class MathUtil {
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }

        let hasil = 0
        for(const number of numbers){
            hasil += number;
        }
        return hasil;
    }
}

// console.log(MathUtil.sum());
console.log(hasil);

const result = new MathUtil();
console.log(result);