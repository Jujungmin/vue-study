# Rotuer
- 라우팅이란?
  - 서버에서 웹 페이지를 미리 받아놓고 새로고침없이 원하는 부분만 해당 화면을 갱신하는 기술
## vue-router
- 페이지를 여러개 만들고 싶을 때 Router를 사용한다.
- Vue에서는 vue-router라는 라이브러리를 설치하면 Router를 이용할 수 있다.

> vue-router 4버전 이상 설치한다.
``` bash
// 기존의 vue-router 버전이 낮을 경우 삭제 후 다시 설치한다.
npm uninstall vue-router --save

npm i vue-router@next --save

yarn add vue-router@4
```

여기서 헤맸던게 내가 설치한 버전은 4인데 내가 참고한 문서는 버전2라 다시 찾아서 공부해야할 필요가 있었다.

원하는 조건 : 라우터를 관리하는 router.js에 views/Home, views/ErrorPage 파일을 추가한다.

``` javascript
// src/router.js
import { createWebHistory, createRouter } from 'vue-router'; //https://blinders.tistory.com/76
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
import User from './views/User';
import User2 from './views/User2';

const routes = [
    
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') }, // (1)
    { path: '/user', name: 'User', componet: User },
    { path: '/user2/:id', name: 'User', componet: User2, props: true },
    { path: '/:catchAll(.*)', name: 'ErrorPage', componet: ErrorPage } // (2)
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

export default router;
```
> 코드설명
> (1). Webpack의 <sub>1)</sub>코드스플리팅을 이용해서 현재 라우트에 해당하는 컴포넌트를 동적로딩한다. 이를 통해 페이지의 초기로딩속도를 줄일 수 있다.
> (2). `path: '/:catchAll(.*)` : 나머지 path를 전부 ErrorPage component로 보내주는 역할.
> 1) 코드스플리팅 : 파일을 분리하는 작업.(파일을 분리하여 사용자에게 필요한 파일만 빠르게 부를 수 있다.) https://velog.io/@s_sangs/%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85-Code-Splitting
``` javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

``` html
<!-- src/views/Home.vue -->
<template>
    <div><h1>Home Page</h1></div>
</template>
<script>
    export default {}
</script>
```
``` html
<!-- src/views/ErrorPage.vue -->
<template>
    <div><h1>Error Page</h1></div>
</template>
<script>
    export default {}
</script>
```
``` html
<!-- src/views/User.vue -->
<template>
    <div><h2>The user is {{ $route.name }}</h2></div>
</template>
<script>
    export default {}
</script>
```
``` html
<!-- src/views/User2.vue -->
<template>
    <div><h2>The user2 is {{ id }}</h2></div>
</template>
<script>
    export default {
        props: ['id']
    }
</script>
```
``` html
<!-- src/App.vue -->
<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link :to="{name: 'User'}">User</router-link> |
            <router-link to="/user2/HAHA">User2</router-link> |
        </nav>
        <router-view/>
    </div>
</template>
<script>
    export default {}
</script>
```
## 결과
1. nav Home 클릭 시 ==> Home Page // http://localhost:8080/
2. nav User 클릭 시 ==> The user is User // http://localhost:8080/user
3. nav User2 클릭 시 ==> The user2 is HAHA // http://localhost:8080/user2/HAHA
## 정리
### router.js파일 만들기
``` javascript
import { createWebHistory, createRouter } from 'vue-router';
import ErrorPage from './ErrorPage';
import 컴포넌트1 from '컴포넌트1경로';
import 컴포넌트2 from '컴포넌트2경로';

const routes = [
    { path: '/원하는링크주소1', name: '컴포넌트1', component: 컴포넌트1 }
    { path: '/원하는링크주소2/:propsId', name: '컴포넌트2', component: 컴포넌트2, props: true }
    { path: '/:catchAll(.*)', name: 'ErrorPage', component: ErrorPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```
- route옵선
  - path: route를 찾을 수 있는 url path
  - name: route로 연결할 때 사용하는 이름(선택이긴 하나 넣어주면 좋다.)
  - componet: route에서 불러와지는 컴포넌트
  - props: 선택옵션으로 path부분의 `:propsId`를 props로 전달해주는 옵션
  - `:propsId`: 원하는링크주소2 다음에 오는 url을 propsId라는 파라미터로 받아서 사용하겠다 라는 의미
  - `:catchAll(.*)`: 위에 선언한 path를 제외한 나머지 path를 전부 ErrorPage component로 보내주는 역할

``` html
<!-- App.vue -->
<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link :to="{name: 'User'}">User</router-link> |
            <router-link to="/user2/HAHA">User2</router-link> |
        </nav>
    </div>
</template>
```
- router-view
  - App.vue파일에 있는 `<template></template>`내의 원하는 위치에 `<router-view></router-view>`를 추가하면 Router로 구분된 페이지를 해당 위치에 보여준다.
- router-link
  - 사용자 내비게이션을 가능하게 하는 컴포넌트
  - `<a>`태그로 만들어지며 tag속성을 통해 다른 tag로 변경가능하다.(tag="div"로 하면 div로 생성)
  - **to속성**
    - router.js에서 선언한 path와 연결시켜준다.
    - `:to`: router.js에서 선언해준 name을 사용할 수 있다. path가 아니라 name을 통해 매칭시켜주는 것이다.


### main.js
라우터를 사용 준비.
``` javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router).mount('#app');
```



---
### Reference
https://goodmemory.tistory.com/151

https://velog.io/@kyh196201/2021.05.31-Vue3-vue-router-%EC%97%B0%EB%8F%99

https://kang-ji.tistory.com/entry/vue-router

https://blinders.tistory.com/76
