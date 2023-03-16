// priority queue (우선순위 큐)

// 정의 👉 큐와 유사하지만 우선순위가 높은 아이템이 먼저 처리 됨

// queue vs priority queue
// 큐는 그냥 무조건 먼저 들어온 data들이 먼저 나감
// 우선순위 큐는 들어간 순서에 상관없이 우선순위가 높은 데이터가 먼저 나감.
// ex) 응급실 환자, 우선순위 프린터 출력...
// 사실 그 프린터 출력 내가볼 땐 우선순위 큐로 구현하는거야...!

// 구현방법
// 👉 배열
// 👉 배열 과정
// 1. 우선 모든 중요도가 적힌 data를 배열에 넣는다.
// 삽입 시간 O(1)

// 삭제 시간 => 가장 중요도가 높은 data여야 하기 때문에,
// 배열의 모든 원소와 비교해서 최댓값을 찾은 후에 꺼내줘야한다.
// O(N)
// ❗️ 배열 단점 ❗️
// 1. 모두 하나씩 다 일일이 비교해봐야 하고,
// 2. 삽입, 삭제 할 때, 데이터를 당겼다 밀었다 해야한다. ㅜ

// 👉 HEAP
// 삽입 시간 : O(logN)
// 삭제 시간 : O(logN)
// N번을 반복해서 Nlogn

// HEAP 작동 방식
// 👉 삽입 : 이진 트리에다가 data를 넣는다. (루트부터 시작, 왼쪽 오른쪽 이런 순서로 진행됨)
// 👉 삭제 : ❗️❗️무조건 루트노드에 있는 자료가 삭제가 된다❗️❗️

// HEAP 종류
// 1. 최소 힙 : 루트 노드가 가장 작은 값을 가짐(작은 값의 data가 우선적으로 제거)
// => ex) 오름차순 출력 => 최소 heap N번 반복하면 됨

// 2. 최대 힙 : 루트 노드가 가장 큰 값을 가짐(큰 값을 가진 data가 먼저 제거)
// => 내림차순 출력 : 최대 힙에서 계속 N번 돌면서 data빼주면 돼!!

// ⭐️ 원소 삽입 ⭐️
// 새로운 원소가 들어오면(왼쪽이 없다면 오른쪽으로 들어옴)
// 부모와 비교해서 최대힙으면 내가 부모보다 크면 자리 바꿈
// 이 때 내 형제랑은 비교 안 해도 되는게, 이미 부모보다 작거나, 크니까 정렬이 돼 있겠지 그치?
// 실시간으로 바로바로 정렬이 돼서 형제랑은 비교 안 해도 돼..!

// 즉, 부모랑 내 값만 비교해가며 자리바꾼다.

// ⭐️ 원소 삭제 ⭐️
// 0. 루트 노드를 꺼낸다.
// 1. 가장 마지막 노드가 루트 노드에 오게 한다.
// 2. 계속 비교해가며 다시 정렬한다.ㅌㅈ
