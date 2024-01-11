const target = {
    name: "Ali",
    surname: "Imanov",
    age: 26,
}

const handler = {
    get(target, property){
        console.log(`Property is here: ${property}`);
        return target[property];
    },
     set(target, property, value){
        if(property === "age" && typeof(value) !== "number"){
            throw new Error("Yash reqem ile yazilmalidir.");
        }
        console.log(`property deyeri deyistirildi: ${property} = ${value}`);
        
        target[property] = value;
    }
}


const proxy = new Proxy(target, handler);
console.log(proxy.name);