const person = {
  fName: "Ali",
  age: 26,
  callLocation() {
    console.log("Baku");
  },
};

for (const key in person) {
  if (person.hasOwnProperty(key) && typeof person[key] === "function") {
    const result = person[key].call(person);
    console.log(`${key}: ${result}`);
  } else {
    console.log(`${key}: ${person[key]}`);
  }
}
