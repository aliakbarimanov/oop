const secretKey = Symbol("secret");
const firstName = Symbol("ad");
const lastName = Symbol("soyad");

const obj = {
    ["secretkey"]: "aaa",
    ["firstname"]: "Ali",
    ["lastname"]: "Imanov",
}

console.log(obj["lastname"]);

obj["lastname"] = "Hesenov";

console.log(obj);