//Global Scope
let hitung = 0;

function pukulAku(){
    // local scope pukulAku
    hitung++;
}

function lain(){
    //local scope lain
}
pukulAku();
pukulAku();

console.log(hitung);

function pertama(){
    //local scope first
    let variablePertama = "Pertama";
    console.log(variablePertama);

    function firstNested(){
        console.log(variablePertama)
    }
}

function kedua(){
    //local scope second
    let variableKedua = "Kedua";
    console.log(variableKedua);
}

pertama();
kedua();

