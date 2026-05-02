const person = {
    firstName: "Muhamad",
    // middleName: "Yuga",
    lastName: "Hidayat",
};

if("firstName" in person) {
    alert(`Hello, ${person.firstName}`);
} else{
    alert("Hello");
}

const student = {
    firstName: "Muhamad",
    middleName: undefined,
    lastName: "Hidayat",
};

if("middleName" in student) {
    alert(`Selamat Datang, ${student.middleName}`);
} else {
    alert("silahkan masuk");
};

const nama = [null, "Yuga", null];
const hasil = 0 in nama;
document.writeln(`<p>${hasil}</p>`);
