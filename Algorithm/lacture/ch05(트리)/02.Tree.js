"use strict";

// Tree (계층형 자료를 표현할 때 쓰임)
// 위 아래를 표현하는 자료들을 표현할 때 쓰임
// ex) 회사 계층, 가족 계층, 파일 구조, html태그 구조

// ❗️트리 용어❗️
// 1. 노드 : 트리는 노드로 구성이 됨.
// 2. 간선 : 노드간에 연결되어 있는 선!
// 3. ✨루트노드✨ : 트리는 ❗️항상❗️ 루트노드부터 시작한다.!!!!
// 4. 리프 노드 : 더 이상 자식이 없는 노드
// 5. 자식 노드, 부모 노드, 형제 노드
// 6. 차수 : 각 노드가 갖는 자식의 수(리프노드의 차수는 0이다.)
// - 모든 차수가 n개 이하인 트리를 n진 트리라고 부른다.
// 7. 조상 : 위쪽으로 간선을 따라가면 만나는 모든 노드
// 8. 자손 : 아래쪽으로 간선을 따라가면 만나는 모든 노드(즉, 나와 연결된 나보다 아래에 있는 모든 노드)
// ⭐️ 루트의 자손노드는 모든 노드이다 ⭐️

// 9. 높이 : 루트노드에서 가장 멀리 있는 리프 노드 까지의 거리.
// 10. 서브트리 : 트리의 어떤 노드를 루트로 하고, 그 자손으로 구성된 트리를 루트 노드라고 한다.

// 트리 종류
// ⭐️ 이진 트리(binary tree) ⭐️
// - ❗️ 대부분 이진트리를 묻는 문제가 가장 많이 나온다 ❗️
// - 모든 노드의 차수(자식의 개수)가 2개 이하

// ⭐️ 완전 이진 트리(complete binary tree) ⭐️
// - 모든 노드들의 차수가 꽉꽉 2개씩 채워져 있다.
// - 왼쪽부터 오른쪽 순서로 채워나간다. => bfs식으로!
// - 값을 추가할 때 어디에다 추가할 지 위치가 바로 보이지?

// binary tree 구현하기
// 각 노드는 값이 있고, left자식을 가리키는 포인터, 오른쪽 값을 가리키는 포인터가 있다.

// 트리의 노드는 값, left, right가 포함되니까 저렇게 넣은거야!
class Node {
  constructor(value) {
    this.value = value; // 각 노드에 들어갈 값을 입력한다.
    this.left = null;
    this.right = null;
  }
}

// 처음에 root값을 무조건 입력을 받아준다...!
class BinaryTree {
  // 루트를 생성하는 생성자.
  constructor(node) {
    this.root = node; // 여기 노드는 class를 집어넣은거야...!!
  }
}

const bt = new BinaryTree(new Node(1)); // 루트를 생성하는데, 그 루트 노드는 1이다.
// 노드를 생성 했기 때문에, bt.root안에서 left right로 접근이 가능하다.
// 일단 외우자..!
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.right = new Node(6);
