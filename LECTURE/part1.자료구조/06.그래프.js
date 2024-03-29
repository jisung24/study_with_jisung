"use strict";
// 트리는 방향 그래프의 일종이다. => 따라서 그래프를 먼저!

// 그래프
// - 동적배열을 이용해서 그래프를 표현한다. (스택도 배열로..! 큐는 큐..)

// 🔴 정의 : 사물을 정점과 간선으로 나타내기 위한 도구이다.
// - ex) 간선 => 도로나, 통로 등등.. 이어주는 다리같은 역할!

// 🟡 구현 방법
// - 인접 행렬 : 2차원 배열을 사용하는 방식
// - 인접 리스트 : 연결리스트를 사용하는 방식

// 두 가지 방법은 각각 필요할 때 쓰이는데

// 인접행렬
// 1. 무방향, 무가중치 그래프에 쓰인다.
// => 양쪽 둘 다 이동할 수 있고, 도로에 가중치가 없는 그래프
{
  // dfs에서 쓰인다.
  let graph = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
  ];
  console.log(graph);
}
// 2. 방향, 가중치 그래프에도 인접행렬이 쓰인다.
// 저 값 01대신 가중치를 적어주면 끝!
// 한 방향 뿐이라서, 가지 못 한다면, 0을 적어주면 된다.

// 인접 리스트
// - 그래프를 리스트로 표현한다 ()안에다가!
