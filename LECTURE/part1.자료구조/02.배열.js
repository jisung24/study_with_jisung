"use strict";

// 01. 배열
// 검색 : 가장 끝에 값이 있을 경우, 없을 경우 => O(N)이 소요됨
// 추가 : 끝에는 O(1) 그 외 지역에는 안 좋음
// 삭제 : 끝 삭제 O(1) 가능 그 외는 x ❗️그래서 배열로 stack을 O(1)로 구현가능
// 조회 : index를 이용해서 O(1)로 가능
// 🔴 자바스크립트 배열은 크기가 늘어나는 동적배열의 기능을 제공해서, 맨 뒤에다가 원소 추가가 가능하다 🔴
// 즉, ⭐️ 배열의 크기가 가득 차면 자동으로 크기가 늘어난다 => 배열의 사이즈를 미리 정해 둘 필요가 없다 ⭐️
// 🟣 큐는 비효율적.. => 삭제는 연결리스트로 🟣

{
  // 스택
  let stack = [];
  // push : 제일 뒤에 :
  // pop : 제일 뒤에 :
  // 배열

  // shift : 제일 앞에 =>
  // unshift :
}
{
  // int c[3] = {};
}
// [3 * 2] 2차원 배열 만들기!
let arr = Array.from(Array(4), () => [0, 0]);
// 일단 크기가 4인데, 그 안에 원소도 배열이야 [0, 0]
// 따라서 2차원 배열이 생성됨.!
console.log(arr);

{
  let arr = new Array(3); // 일단 크기가 3인 1차원 배열을 만들어.
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array.from({ length: 4 }, (_, j) => i * 4 + j);
  }
  console.log(arr);
}

// 이후 다양한 함수를 이해해야한다.
