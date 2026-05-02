function sayHello(name){
    document.writeln(`<p>Hello ${name}</p>`);
}

sayHello("Muhamad");

const say = sayHello;
say("Yuga");

function beriAkuNama(panggil){
    panggil("Hidayat");
}

beriAkuNama(sayHello);
beriAkuNama(say);