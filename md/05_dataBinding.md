# Data Binding
## 양방향 데이터(Two way binding)바인딩
- 단방향 데이터 바인딩
  - Webtoon.vue의 `v-for`를 이용하여 리스트를 렌더링하면서 name, img, link 등등의 요소를 컴포넌트에서 표시하였다.<br/>양쪽(vue인스턴스와 component)에서 접근하는 것이 아닌 vue인스턴스 값을 component에게 준것 뿐이기 때문에 이는 단방향데이터 바인딩이다. 
- 양방향 데이터 바인딩
  - vue 인스턴스와 component가 서로의 데이터에 접근하는 것을 말한다.

(+) 더하기 : 양뱡향 바인딩 / 단방향 바인딩
양뱡항 바인딩의 경우, 사용자의 입력값이 곧바로 코드 상의 변수에 바인딩될 수 있으나, 단방향의 경우 event를 통해서만 코드 상 변수에 데이터 값이 담긴다.

### input
- `v-model`은 state값을 꼭 사용해야 한다. props로 내려받은 값을 바로 `v-model`에서 사용할 수 없다.
``` html
<!-- App..vue -->
<template>
    <div>
        <input v-model="title"/>
        <h1>{{ title }}</h1>

        <h2>checkBox</h2>
        <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoons"/>
        <label for="프롬스타">프롬스타</label>
        <input type="checkbox" id="햄스터와그녀" value="햄스터와 그녀" v-model="checkedWebtoons"/>
		<label for="햄스터와그녀">햄스터와 그녀</label>
		<input type="checkbox" id="위대한로맨스" value="위대한 로맨스" v-model="checkedWebtoons"/>
		<label for="위대한로맨스">위대한 로맨스</label>
		<input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons"/>
		<label for="아귀">아귀</label>
        <br/>
        <span>찜한 웹툰: {{ checkedWebtoons }}</span>
        
        <h2>radioBox</h2>
        <input type="radio" id="male" value="남성" v-model="gender"/>
        <label for="male">남</label>
        <input type="radio" id="female" value="여성" v-model="gender"/>
        <label for="female">여</label>

        <h2>selectBox</h2>
        <select v-model="category">
            <option disabled value>선택해주세요.</option>
            <option>로맨스</option>
            <option>호러</option>
            <option>스릴러</option>
        </select>
        <span>선택: {{ category }}</span>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                checkedWebtoons: [],
                gender: '',
                category: '',
            }
        }
    }
</script>
```
1. input에 값이 입력된다.
2. input의 값을 바탕으로 title state가 업데이트된다.
3. 업데이트된 state값이 title에 표시된다.


---
### Reference
https://simplevue.gitbook.io/intro/06.-data-binding