let arr = [10, 20, 30, 40];
console.log(arr.length);
arr.splice(1, 1); //배열의 특정 요소 삭제
console.log(arr);
console.log(arr.length);

arr.splice(1, 2, 100, 200); //1번째부터 2개 삭제 후 100,200 삽입
console.log(arr);

//10,100,300,400,200
arr.splice(2, 0, 300, 400); //2번째에 300,400 삽입
console.log(arr)

//slice:배열의 부분 요소 가져오기
let narr = [10, 20, 30, 40, 50, 60, 70, 80];
let subarr = narr.slice(2, 5); //2번째부터 4번째 까지의 배열요소 가져오기
console.log(narr);
console.log(subarr);

//concat: 두개의 배열을 이어붙임
let arr2 = [1, 2];
let totarr = arr2.concat(3, 4);
console.log(arr2);
console.log(totarr);

let totarr2 = arr2.concat([3, 4]);
console.log(totarr2);
let arr3 = [10, 20];
let totarr3 = arr2.concat(arr3);
console.log(totarr3);
let totarr4 = arr2.concat(3, 4, [5, 6], arr3);
console.log(totarr4);
