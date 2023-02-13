# Component 구성해보기
- **component**란 view를 구성하는 작은 <u>조각</u>들.

> header, menu, content 를 구성해보자.

먼저 components의 HelloWorld.vue 제거.
``` bash
npm run serve
```

## vue 파일 구성 알아보기
vue 파일들은 `.vue`라는 확장자를 가지고 아래와 같은 구성으로 이루어진다.
``` html
<!-- html -->
<template>
</template>
<!-- script -->
<script>
    export default {};
</script>
<!-- style -->
<style>
</style>
```

## style 변경하기
`scoped` 옵션을 넣으면 해당 컴포넌트에만 스타일 적용할 수 있다.
``` html
<!-- App.vue -->
<style scoped>
</style>
```

## Component 가져오기
`App.vue`에서 모든 컴포넌트들을 가져온다.
> 즉, App.vue 는 다른 컴포넌트들의 부모 컴포넌트가 된다.
- `@/component/Content`에서 `@`는 절대경로(src아래)를 가리킨다.
- `./` 같은 상대경로로도 가져올 수 있다.
- component를 사용하기 위해서는 script 안쪽의 `components`에 등록을 해줘야 vue component로 인식할 수 있다.
``` javascript
// App.vue
<template>
	<div>
		<Header/>
	</div>
	<div>
		<Menu/>
		<Content/>
	</div>
</template>

<script>
import Header from './component/Header';
import Menu from './component/Menu';
import Content from '@/component/Content';

export default {
    name: 'app', // 화면이 렌더링되는 페이지 index.html의 최상단 id값
    components: { // 가져온 component들을 등록한다.
        Header,
        Menu,
        Content
    }
}
</script>
```

---
### Reference
https://simplevue.gitbook.io/intro/02.-component