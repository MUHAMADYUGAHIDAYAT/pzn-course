const person = {
    // address: {
    //     country: "indonesia",
    // }
};

let country;
// tanpa optional chaining
if(person.address !== undefined && person.address !== null){
    country = person.address.country;
}

document.writeln(`<p>${country}</p>`);

document.writeln(`<br`);
document.writeln(`<br`);
document.writeln(`<br`);

// pakek optional chaining
country = person?.address?.country;
document.writeln(`<p>${country}</p>`);
