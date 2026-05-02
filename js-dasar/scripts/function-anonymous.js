const say = function (name){
    document.writeln(`<p>Hello ${name}</p>`);
}

say("Yuga");
say("Hidayat");

function giveMeName(panggil){
    panggil("Yuga");
}

giveMeName(say);
giveMeName(function(name){
    document.writeln(`<P>Hi ${name}</p>`)
})