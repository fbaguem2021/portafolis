class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `Person { nombre: ${this.age}, edad: ${this.age} }`
  }
  valueOf() {
    return `Person { nombre: ${this.age}, edad: ${this.age} }`
  }
}

const p = new Person('Pepe', 20);
console.log(p); // Devuelve: 20
