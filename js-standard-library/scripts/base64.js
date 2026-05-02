const ori = "M&Yuga=Hidayat";
console.log(ori);

const encode =btoa(ori);
console.log(encode);

const decode = atob(encode);
console.log(decode);


{
    console.info("Soal 1");
    function encodeData(value){
        const encodeD = btoa(value);
        return encodeD;
    }

    let test = encodeData("Yuga");
    console.log(test)

}

{
    console.log("Soal 2");
    function decodeData(value){
        const decodeD = atob(value)
        return decodeD;
    }

    const test = decodeData("WXVnYQ==");
    console.log(test);

}
{
    console.log("Soal 1");
    const string = "Hello, World!";
    const encode = btoa(string);
    console.log(encode);
}
{
    console.log("Soal 2");
    const string = "SGVsbG8sIFdvcmxkfCE=";
    const decode = atob(string);
    console.log(decode);

}