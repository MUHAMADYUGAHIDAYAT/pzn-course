{
    const namaDepan = Symbol("namaDepan");
    const namaBelakang = Symbol("namaBelakang");
    
    const orang = {};
    orang[namaDepan] = "Muhamad";
    orang[namaBelakang] = "Hidayat";
    
    console.info(orang);
    console.info(orang[namaDepan]);
    console.info(orang[namaBelakang]);

}

{
    // Symbol for

    console.info(Symbol.for("namaDepan") === Symbol.for("namaDepan"));
    
    const orang = {};
    orang[Symbol.for("namaDepan")] = "Muhamad";
    orang[Symbol.for("namaBelakang")] = "Hidayat";
    
    console.info(orang);
    console.info(orang[Symbol.for("namaDepan")]);
    console.info(orang[Symbol.for("namaBelakang")]);
}