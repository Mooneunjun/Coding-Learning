// unshift => 배열의 앞에 요소 추가
// shift => 배열의 앞에 요소 제거
// push => 배열의 뒤에 요소 추가
// pop => 배열의 뒤에 요소 제거
// splice => 배열의 특정 위치에 요소 추가/제거
// concat => 배열을 합쳐줌
// slice => 배열을 자름
// join => 배열을 문자열로 변환
// indexOf => 배열에서 요소의 위치를 찾음
// lastIndexOf => 배열에서 요소의 위치를 찾음
// includes => 배열에 요소가 있는지 확인
// find => 배열에서 요소를 찾음
// findIndex => 배열에서 요소의 위치를 찾음
// filter => 배열에서 요소를 찾아서 배열로 반환
// map => 배열을 변형
// reduce => 배열을 변형
// sort => 배열을 정렬
// reverse => 배열을 뒤집음
// forEach => 배열을 순회
// some => 배열에 요소가 하나라도 조건에 맞는지 확인
// every => 배열의 모든 요소가 조건에 맞는지 확인
// fill => 배열을 채움
// copyWithin => 배열을 복사함
// flat => 배열을 평탄화
// flatMap => 배열을 평탄화하고 변형
// keys => 배열의 키를 반환
// values => 배열의 값을 반환
// entries => 배열의 키와 값을 반환
// from => 배열을 만듬
// of => 배열을 만듬
// isArray => 배열인지 확인
// toString => 배열을 문자열로 변환
// toLocaleString => 배열을 지역화된 문자열로 변환
// length => 배열의 길이
// constructor => 배열의 생성자

// unshift
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// splice
arr = [1, 2, 3];
arr.splice(3, 0, 4);
console.log(arr); // [1, 2, 3, 4]

const copyArr = arr;
console.log(arr); //
console.log(copyArr); //

// filter
arr = ["js", "html", "css", 0, 1, 2, 3, 4, 5];

const isNumber = (item) => typeof item === "number";
const isString = (item) => typeof item === "string";

const filterArr = arr.filter(isNumber);

console.log(filterArr); // [4, 5]

console.log(arr.filter(isString)); // ["js", "html", "css"]

//sort
arr = [3, 1, 2, 4, 5];
const sortArr = arr.sort();
console.log(sortArr); // [1, 2, 3, 4, 5]

arr = ["가", "라", "나", "다", "마"];
console.log(arr.sort((a, b) => a.localeCompare(b))); // ["가", "나", "다", "라", "마"]

// find
const menu = ["짜장면", "짬뽕", "탕수육", "볶음밥"];
const findMenu = menu.find((item) => item === "짜장면");
console.log(findMenu); // 짜장면

// map
arr = [1, 2, 3, 4, 5];
const mapArr = arr.map((item) => typeof item === "number");
console.log(mapArr); // [2, 4, 6, 8, 10]

// includes
arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true

arr = ["js", "html", "css"];
newArr = arr;

// push
arr = ["js", "html", "css"];
newArr = arr;
newArr.push("react");

console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [1, 2, 3, 4]

// ...arr => 배열을 추가
arr = ["js", "html", "css"];
newArr = arr;
arr = ["react", ...arr];
console.log(arr); // ["js", "html", "css"]
console.log(newArr); // ["js", "html", "css", "react"]

// concat
arr = ["js", "html", "css"];
newArr = arr.concat("react");
console.log(arr); // ["js", "html", "css"]
console.log(newArr); // ["js", "html", "css", "react"]

// slice
arr = ["js", "html", "css"];
newArr = arr.slice(0, 2);
console.log(arr); // ["js", "html", "css"]
console.log(newArr); // ["js", "html"]
