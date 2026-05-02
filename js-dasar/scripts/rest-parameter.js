function sum(name, ...data){
    let total = 0
    for (const item of data){
        total += item;
    }
    console.log(`Total ${name} is ${total}`)
    document.writeln(`<p>Total ${name} is ${total}</p>`)

}
    sum("Ayam", 1, 5, 7, 3, 2, 9);
    sum("Kambing", 3, 5, 3, 1, 2, 7);
    sum("Sapi", 2, 3, 4, 5, 6, 7,8);

    const value = [10, 10, 10, 10, 10,];
    sum("Values", ...value);

function oldSum(){
    let total = 0;
    for(const item of arguments){
        total += item;
    }
    console.info(`Total is ${total}`)
    document.writeln(`<p>Total Arguments is ${total}</p>`)
}
oldSum(1, 2, 3, 4, 5);