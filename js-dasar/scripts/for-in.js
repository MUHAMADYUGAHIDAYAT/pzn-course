const dataMahasiswa = {
    nama : "Muhamad Yuga Hidayat",
    prodi : "Sistem Informasi",
    semester : 5,
};

for(const data in dataMahasiswa){

    document.writeln(`<p>${data} : ${dataMahasiswa[data]}</p>`);
}

document.writeln("<p>Mata Kuliah :</p>");

const mk = ["Pemog2", "Anvis", "Basis Data"];
for (const idx in mk ){
    document.writeln(`<p>${idx} : ${mk[idx]}</p>`);
}