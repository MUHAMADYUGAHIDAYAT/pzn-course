{
    console.info("Saol 1");
    function isObject(value){
        return typeof value === "object" && value !== null;
    }
    console.log(isObject({}));
    console.log(isObject(null));
}

{
    console.info("Soal 2");
    const angka = [1, 2, 2, 3, 4, 4, 5];
    const unik = [...new Set(angka)];
    console.log(unik);
}
{
    console.info("Soal 3");
    const obj ={a: 1};
    const ada = obj.hasOwnProperty("a");
    console.log(ada);
}
{
    console.info("Soal 4");
    const str = "123";
    const angka = Number(str);
    console.log(angka)
}
{
    console.info("Soal 5");
    function isEven(n){
        if(n % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    console.log(isEven(4));
    console.log(isEven(1));
}
{
    console.info("Soal 6");
    function isPrime(n){
        if (n <= 1){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++){
            if (n % i === 0)
            return false;
        }
        return true;
    }
    console.log(isPrime(7));
    console.log(isPrime(4));
}
{
    console.log("Soal 7");
    function isArray(value){
        return Array.isArray(value);
    }

    console.log(isArray([1, 2, 3]));
}