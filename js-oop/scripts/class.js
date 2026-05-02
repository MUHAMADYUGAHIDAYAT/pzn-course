class Orang {
    

}
Orang.prototype.bilang = function (nama){
    console.log(`Hellp ${nama} nama saya adalah ${this.name}`);
}

const yuga = new Orang();
console.log(yuga);