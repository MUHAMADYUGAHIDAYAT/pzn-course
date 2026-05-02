

class Configuration {
    static name = "Belajar JavaScript OOP";
    static version = 1.0;
    static author = "EKo Kurniawan"
}
const config = new Configuration();
console.info(config)

Configuration.author = "Eko Khannedy";
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);
{
    console.log("Soal 1");
    class User {
        static userCount = 0;

        constructor(nama){
            this.nama = nama;
            User.userCount++;
        }

        static getUserCount(){
            return this.userCount;
        }
    }
    const raffi = new User("Raffi");
    const adhit = new User("Adhit");
    const dyo = new User("Dyo");

    console.log(User.getUserCount());
}
{
    class AppConfig {
        static config = {
            version: undefined,
            enviroment: undefined,
        }
    }
}