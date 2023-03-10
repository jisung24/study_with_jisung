"use strict";
// DFS
// 깊이 우선 탐색

// 깊이 있게 계속 탐색을 할 때 마다 stack에 쌓이고,
// 다시 올라갈 땐 나중에 탐색한 원소가 먼저 나가서
// 만약 깊이가 ade순이라면
// stack에 ade가 순서대로 쌓이고,
// 위로 올라갈 땐 e d 순으로 스택에서 나간다.
// ❗️즉, 뒤로가기 식으로 문제가 풀린다 => 그래서 stack이다.❗️

// 즉 stack[stack.length - 1]의 원소랑 계속 비교한다!

// 결국 stack을 pop하는데, stack의 길이가 없다면 나감.

// bfs는 이미 탐색한 원소로는 안 가고 계속 앞으로 직진해서 할 수 있는데,
// dfs는 다시 위로 올라가려면 왔던 작업들을 뒤로가기를 해야해서 stack이다.
