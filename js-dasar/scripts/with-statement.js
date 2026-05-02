const person = {
    firstName: "Muhamad",
    midddleName: "Yuga",
    lastName: "Hidayat",
}

console.log(person.firstName);
console.log(person.midddleName);
console.log(person.lastName);

const firstName = "Ayam"
const lastName = "p"
with (person) {
    console.log(firstName);
    console.log(midddleName);
    console.log(lastName); 
}

for (const ayam in person) {
    document.writeln(`<p>${ayam} : ${person[ayam]}</p>`)
}

console.log(firstName);