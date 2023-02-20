## Props 설명
1. Props는 부모-자식 관계의 components관계에서 실행된다.
   1. 부모 컴포넌트 안의 **자식 html태그 안**에 넘겨줄 prop를 선언.
   2. 자식 컴포넌트 script안의 **props안에 데이터타입**(String, Array, Object..)을 명시해야 하고 디폴트값을 설정할 수있다.
2. 부모 컴포넌트에서 보내준 prop데이터를 **자식 컴포넌트에서 직접 변형이 불가능**하다.

## Props 사용방법 정리
### 1. 부모 컴포넌트에서 프롭 선언
``` bash
<template>
    <자식컴포넌트이름 v-bind:자식데이터(props이름)="데이터" />
    <자식컴포넌트이름 v-bind:자식데이터(props이름)="부모데이터" />
</template>
```

### 2. 자식 컴포넌트에서 프롭 선언
``` javascript
// 1. 데이터타입
props: {
    프롭명: 데이터타입 only
}

// 2. 데이터타입, 디폴트
props: {
    프롭명: {
        type: 데이터타입,
        default: {
            type: 데이터타입,
            default: 디폴트 값
        }
    }
}

// 3. 오브젝트타입
props: {
    프롭명: {
        type: 데이터타입
        default: () => {
            key1: value1,
            key2: value2
        }
    } 
}

props: {
    프롭명: {
        type: 데이터타입
        // method형태로도 사용 가능
        default() {
           key1: value1,
           key2: value2,
        }
    }
}
```
---
### Reference
https://velog.io/@tobo/vue.js-Prop-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95

https://whitepro.tistory.com/254

