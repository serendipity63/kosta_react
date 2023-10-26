let user = { id: 1, name: 'hong', age: 30 };
let user2 = user;
let user3 = { ...user };
user.name = 'song';
console.log(user);
console.log(user2);
console.log(user3);

let user4 = { ...user, age: 40 };
console.log(user4);
//원래 있는 속성을 넣으면 변경이 된다 없는걸 넣으면 추가가 됨
//특정 속성만 바꾸고 싶을때는 전개 연산자를 쓴다

