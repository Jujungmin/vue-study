# v-if, v-show를 이용한 조건부 렌더링
## v-if
``` javascript
<div v-if="true">True</div>
<div v-if="false">False</div>

// True태그가 렌더링.
```
`v-if`는 조건에 해당하는 것만 렌더링, 조건에 해당하지 않는다면 렌더링을 하지 않는다.
## v-else
`v-else`는 `v-if` 와 함께 이용할 수 있다. 앞의 조건이 성립되지 않으면 `else`조건이 동작한다.
``` javascript
<div v-if="false">True</div>
<div v-else>False</div>

// False 렌더링
```
앞의 조건이 성립하지 않았기 때문에 True는 렌더링되지 않고 False가 렌더링된다.

## v-show
`v-if`와 결과는 같으나 `v-show` 라는 <sub>1)</sub>디렉티브는 동작하는 방식이 다르다.

`v-if`의 경우 조건이 성립하지 않을 경우 태그 자체를 렌더링하지 않지만, **`v-show`는 렌더링 하되 `display:none`처리**한다.
``` javascript
<div v-show="true">True</div>
<div v-show="false">False</div>

// <div>True</div>
// <div style="display: none;">False</div>
```

### 실습해보기
- Webtoon.vue 컴포넌트에 N딱지를 `v-if`를 이용해 렌더링해보자.

``` html
<!-- App.vue -->
<template>
    <div class="wrap">
        <Webtoon v-bind:propsItem:webtoonList />
    </div>
</template>

<script>
    import Webtoon from './components/Webtoon';

    export default {
        components: {
            Webtoon
        },
        data() {
            return {
                webtoonList: [
                    {
                        id: '0',
                        name: '햄스터와 그녀',
                        link: 'http://webtoon.daum.net/webtoon/view/hamsterandher',
                        img: 'http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54',
                        isUpdate: true
                    },
                    {
                        id: '1',
                        name: '프롬 스타',
                        link: 'http://webtoon.daum.net/webtoon/view/fromstar',
                        img: 'http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1',
                        isUpdate: true
                    },
                    {
                        id: '2',
                        name: '위대한 로맨스',
                        link: 'http://webtoon.daum.net/webtoon/view/greatromance',
                        img: 'http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085',
                        isUpdate: false
                    },
                    {
                        id: '3',
                        name: '빛나는 손을',
                        link: 'http://webtoon.daum.net/webtoon/view/Hand',
                        img: 'http://t1.daumcdn.net/cartoon/5913FCAC0234C50001',
                        isUpdate: false
                    }
                ]
            }
        }
    }
</script>
```

``` html
<!-- Webtoon.vue -->
<template>
    <h2>webtoon</h2>
    <ul class="list">
        <li class="list-item" v-for=item in propsItem v-bind:key="item.id">
            <a v-bind:href="item.link" target="_blank" v-bind:alt="item.name">
                <img v-bind:src="item.img"/>
                <span class="tit">제목 : {{ item.name }}</span>
            </a>
            <span class="tag" v-if="isUpdate">N</span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            propsItem: { type: Array, default: () => {} }
        }
    }
</script>

<style scoped>
    h2 {text-align:center;}
    a {list-style:none; text-decoration:none;}
    li {list-style;none;}
    .list {max-width:450px; width:100%; margin:0 auto;}
    .list-item {position:relative; border-bottom:1px solid #ebebeb; margin-bottom:25px;}
    .tit {display:inline-block; font-size:18px; font-weight:bold; color:#000; padding:20px 15px;}
    img {width:100%; background:#ebebeb; border-radius:4px;}
    .tag {position:absolute; left:10px; top:10px; padding:5px 30px; color:#fff; border-radius:4px; background:#fc2332; font-weight:bold;}
</style>
```

### 마무리
> `v-if`와 `v-show` 차이점
> - `v-if`는 false일 경우 렌더링 자체가 되지 않고 `v-show`는 항상 렌더링 된다.
> - `v-if`는 false일 경우 엘리먼트를 삭제해버리고 `v-show`는 `display:none`이 적용된다.
> - `v-if`는 template와 `v-else`를 지원하지만 `v-show`는 지원하지 않는다. 


---
1) 디렉티브(Directive)
- 디렉티브는 `v-`접두사가 있는 특수 속성이다.
- 디렉티브 속성 값은 <sub>1)</sub>단일 Javascript표현식이 된다.(`v-for`, `v-on`, `v-slot` 제외)
- 표현식 값이 변경될 때 DOM에 반응적으로 업데이트를 적용하는 것이다.
1) 단일표현식 : 표현식은 값으로 평가할 수 있어야 하는 코드조각. 쉽게 말해 `return`뒤에 사용할 수 있는 코드여야 한다.

### Reference
[Vue 디렉티브(Directive)란?](https://zz132456zz.tistory.com/47)

[template - 보간법](https://velog.io/@alkwen0996/Vue-template-%EB%B3%B4%EA%B0%84%EB%B2%95)

[vue.js - 템블릿 문법](https://v3-docs.vuejs-korea.org/guide/essentials/template-syntax.html#using-javascript-expressions)
