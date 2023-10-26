function Person(name, age) {
    this.name = name;
    this.age = age;

    this.info = () => {
        return `이름:${this.name}, 나이:${this.age}`;
    }
}

let person = new Person('hong', 20);
console.log(person.info());
