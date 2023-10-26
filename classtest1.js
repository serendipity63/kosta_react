class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello!, ${this.name}`);
    }
}

let user = new User('hong');
user.sayHello(); //특정 기능 호출
