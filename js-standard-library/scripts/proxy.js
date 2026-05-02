const target = {};

const handler = {
    get: function(target, property){
        console.info(`Access Property : ${property}`)
        return target[property];
    },
    set: function(target,property, value){
        console.info(`Change Property ${property} : ${value}`)
        return target[property] = value;
    }
}

const proxy = new Proxy(target, handler);
proxy.namaDepan = "Yuga";
proxy.namaBelakang = "Hidayat";

console.info(proxy.namaDepan);
console.info(proxy.namaBelakang);
console.info(target);

{
    console.info("Soal 1");
    const user = {
        name: "Yuga",
        age: 19,
        email: "acousticyuga@gmail.com"
    };

    const userProxy = new Proxy(user, {
    set(target, property, value) {
        if(property === "name"){
            const namePattern = /^[a-zA-Z]+$/;
            if(typeof value !== "string" || !namePattern.test(value)){
                console.log("Error: Name must be a String not contain number or symbol.");
                return false;
            }
        }
        if (property === 'age') {
            if (typeof value !== 'number' || value <= 0) {
                console.log('Error: Age must be number or a positive number.');
                return false;
            }
        }
        if (property === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(value)) {
                console.log('Error: Email format is invalid.');
                return false;
            }
        }

        console.log(`Changing ${property} from ${target[property]} to ${value}`);
        target[property] = value;
        return true;
    }
});
    console.log(userProxy);
    userProxy.name = "Raffi"
    console.log(userProxy)
    userProxy.name = "das1231123";
    console.log(userProxy);
    userProxy.age = "20";
    userProxy.age = 20;
    console.log(userProxy)
    userProxy.age = -12;
    console.log(userProxy);
    userProxy.email = "";
    console.log(userProxy)

    
}

// {
//     console.log("Soal 2");
//     const dataM = {
//         name: "Yuga",
//         age: 20
//     }

//     const proxyDataM = new Proxy(dataM, {
//         set(target, property, value){
//             if(property === "name"){
//                 const namePattern = /^[a-zA-Z]{1,20}$/;
//                 if (!namePattern.test(value) || typeof value !== "string"){
//                     console.log("Error: Name must be on contain alphabet only");
//                     return false;
//                 }
//             }
//             if(property === "age"){
//                 const agePattern = /^[0-9]{1,3}$/;
//                 if(!agePattern.test(value)){
//                     console.log("Error: no one in this world has live that long");
//                     return false;
//                 }
//                 if(typeof value !== "number"){
//                     console.log("Error : Age must be a Number only");
//                     return false;
//                 }
//             }
//             console.log(`Changing ${property} from ${target[property]} to ${value}`);
//             target[property] = value;
//             return true;
//         }
//     });
//     proxyDataM.name = "raffi";
//     proxyDataM.name = "raffifx01";
//     proxyDataM.age = "20";
//     proxyDataM.age = 21;
// }
