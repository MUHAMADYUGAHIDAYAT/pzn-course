let parameter;
let data = parameter;

// tanpa nullish coalescing
if(data === undefined || data === null) {
    data = "this variable is not defined";
} else {
    data = `<p>This Variable Value is ${data} </p>`;
}
document.writeln(`<p>${data}</p>`);

document.writeln(`<br>`);

//pakek nullish coalesacing
data = parameter ?? "Nilai Defalut" ;
document.writeln(`<p>${data}</p>`);

