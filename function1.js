function User(name) { // 생성자 함수는 대문자로 시작한다 반드시 new 연산자를 붙여 실행한다.
    this.name = name;
    this.isAdmin = false;
    // return this; // this가 암묵적으로 반환된다
}

let user = new User('hong');
console.log(user.name);
console.log(user.isAdmin);
