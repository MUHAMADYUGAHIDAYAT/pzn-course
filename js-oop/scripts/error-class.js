class ValidasiError extends Error{
    constructor(message, field){
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...nomors){
        if (nomors.length === 0){
            throw new ValidasiError("Nomor tidak boleh kosong!", "Nomors");
        }

        let hasil = 0;
        for(const nomor of nomors){
            hasil += nomor;
        }
        return hasil;
    }
    
}
try {
    console.log(MathUtil.sum());
    console.log("test")
} catch (error) {
    if(error instanceof ValidasiError){
        console.log(`Terjadi Error di Field : ${error.field} dengan error "${error.message}"`)
    } else {
        console.log(`Terjadi Error : ${error.message}`);
    }
}  finally {
    console.log("Program Selesai")
}

console.log("Yuga");

