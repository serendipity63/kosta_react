let fruits = ['banana'];
let arr = fruits;
fruits.push('orange');
console.log(fruits);
console.log(arr);
console.log(arr == fruits);

let carr = [...fruits]; //중요:배열의 깊은 복사(전개연산자(...)를 사용하여 복사한다)
//전개 연산자 carr은 배열이다 근데 데이터를 fruit 에 있는 모든 데이터를 넣는다 무조건 점 세개
fruits.push('strawberry');
console.log(fruits);
console.log(carr);
console.log(carr == fruits);

