'use strict';

// ✨ 브라우져 렌더링 과정 ✨
// 렌더링이란? 
// 내가 작성한 html,css,js가 브라우져에서 띄워지기까지의 과정

// 내가 url을 입력하면 html css js를 받아서 렌더링을 하기까지 과정. 

// 1. 내가 url을 입력한다 => 서버에서 이제 html을 줌 

// 받아서 렌더링하기까지의 과정을 살펴보자! 

// 2. 가장 먼저 DOM tree를 생성한다. 
    // - 바이트로 서버에서 받는다 (3c 6e 64 5F 등등..)
    // - 문자열로 변환한다 "<html><head> 등등.."
    // - 토큰 => start tag : html endTag : html
    // - 노드객체 => 트리구조의 하나로 딱딱 만든다. 
    // - 노드객체를 전부 트리구조로 만들어서 dom이란 모델을 만든다. 

// 3. CSSOM을 만든다. 
    // css - inline css도 있지만 head안에 link style등을 해석할 것이 필요하다. 
    // 역시 바이트, 문자열, 토큰, 노드로 만든다. 
    // DOM의 html노드에서 화살표로 해당 css를 연결해준다. 

// 4. DOM + CSSOM = Rendering Tree 
// ❗️페이지를 렌더링하는데 필요한 노드만 포함한다❗️
// ✨즉, display : none이 붙은 노드는 삭제된다. 

// 5. 레이아웃 => 여기서 싹 다 이제 결정을 해줘. 
    // 각 노드들의 위치, 크기, 색상등을 결정한다.  
    // 이제 페인팅 단계에서 px로 변환하고 띄운다. 

// 6. 페인팅 => 실제 픽셀로 바꾸고 이제 렌더링됨.
    // 렌더링 트리의 각 노드가 실제 픽셀로 변환되게된다. 