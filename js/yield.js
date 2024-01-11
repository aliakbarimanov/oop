function* createIterator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

    return; // yazdigimiz halda dongu dayanir.
}

const nextNumber = createIterator();

console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);