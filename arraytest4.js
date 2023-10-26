let arr = ['사과', '오렌지', '바나나'];
//for문 대체
arr.forEach(function (item, index, array) {
    console.log(`${index},${item},${array}`);
});

let users = [{ id: 1, name: 'John', age: 15 }, { id: 2, name: 'Peter', age: 20 }, { id: 3, name: 'Mary', age: 25 }, { id: 4, name: 'Mary', age: 30 }];
//find: 조건을 만족하는 데이터를 찾는다
let user1 = users.find(function (item) {
    return item.id == 1;

})
console.log(user1);

//filter:조건을 만족하는 데이터들을 (여러개일때) 찾는다
let user2 = users.filter(function (item) {
    return item.name == 'Mary';

})
console.log(user2);

let user20 = users.filter(item => {
    if (item.age >= 20 && item.age < 30) return true;
    else return false;
    // return item.age >= 20 && item.age < 30;

})

console.log(user20);

let usersp = users.map(function (item) {
    item.age++;
    return item;
})

console.log(usersp);

//나이순으로 sort
users.sort(function (item1, item2) {
    return item2.age - item1.age;
    // 배열의 원본이 바뀜
})

console.log(users);

//문자열순으로 sort
users.sort(function (item1, item2) {
    return item1.name.localeCompare(item2.name);
    // 배열의 원본이 바뀜
})
console.log(users);