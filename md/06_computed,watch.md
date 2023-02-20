# Computed와 watch
## Computed
연산 결과를 캐싱해주는 computed에 대해서 알아보자.
``` html
<!-- App.vue -->
<template>
    <div id="wrap">
        {{ message }}
        <h2>뒤집힌 message</h2>
        {{ message.split('').reverse().join('') }} <!-- (1) -->
        {{ reversedMessage }} <!-- (2)-->
        {{ reversedMessage2() }} <!-- (3) -->
    </div>
</template>

<script>
    export default {
        name: 'wrap',
        data() {
            return (
                message: 'Hello Vue!!' 
            )
        },
        computed: {
            reversedMessage() {
                // console.log('computed');
                return this.message.split('').reverse().join('');
            }
        },
        methods: {
            reversedMessage2() {
                // console.log('methods');
                // input값이 바뀔때마다 methods가 호출된다.
                return this.message.split('').reverse().join('');
            }
        }
    }
</script>
```
### 설명
- (1) : 템플릿 영역에 연산처리.
  - state 또는 props가 변경될 때마다 re-render되기 때문에 매번 연산을 해야된다.
- (2) : computed 사용하여 연산결과를 캐싱하여 사용.
  - `computed`는 대상(ex. message)을 따라 연산결과가 캐싱된다. 대상인 message가 변경되지 않는다면 이미 연산처리된 즉, 캐싱처리되어 있는 reversedMessage를 가져온다.
- (3) : methods에서도 같은 역할을 할수 있지 않나?
  - 가능하나 함수의 경우 re-render될때마다 실행되기 때문에 캐싱 이득을 취할 수 없다.
### computed와 methods와의 차이점
1. template에서 호출시 ()를 적지 않아야 한다.
2. return 값이 반드시 존재해야 한다.
3. 파라미터를 받을 수 없다.


## watch
- state나 props를 감시하고 해당 값이 변경 되었을 때의 행동을 지정할 수 있는 watch 속성을 알아보자.
 - watch할 대상을 적어주고 대상의 값이 변경되었을 때의 행동을 적어준다.
 - fullname이라는 state 값을 추가하고 watch 값이 바뀔때마다 fullname 값을 변경해보자.
``` html
<!-- App.vue -->
<template>
    <div id="wrap">
        <input v-model="firstname"/>
        <input v-model="lastname"/>

        <h2>full name</h2>
        <span>{{ fullname }}</span>
    </div>
</template>

<script>
    export default {
        name: 'wrap',
        data() {
            return {
                firstname: '',
                lastname: '',
                fullname: '',
            }
        },
        watch: {
            firstname(val) {
                // console.log('firstname', val);
                this.fullname = `${val} ${this.lastname}`;
            },
            lastname(val) {
                // console.log('lastname', val);
                this.fullname = `${this.firstname} ${val}`;
            }
        }
    }
</script>
```
위와 같이 watch를 사용하는 방법도 있느나 관리측면에서 좋지 않다.

## watch를 computed로 변경하기
- watch로 fullname을 만들기 위해서는 2개의 state(firstname, lastname)를 사용했으나 computed를 이용하면 간단하게 이용할 수 있다.
``` html
<!-- App.vue -->
<template>
    <div class="wrap">
        <input v-model="firstname"/>
        <input v-model="lastname"/>

        <h2>full name</h2>
        <span>{{ full name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'wrap',
        data() {
            return {
                firstname: '',
                lastname: '',
            }
        },
        computed: {
            fullname() {
                return `${this.firstname} ${this.lastname}`;
            }
        }
    }
</script>
```

### watch / computed ??
watch는 언제 변하는지 예측이 어려울 때 사용. 예를 들어 비동기 통신이 있다. 우리가 어떤 데이터를 요청했을 때 이 값이 1초뒤에 올지 2초뒤에 올지 예측이 어려울 때 그 값을 watch를 통하여 감시하고 있다가 해당 값에 대한 응답이 왔을 때 후처리를 해준다.

computed는 위에서 알아본 것처럼 복잡한 연산 캐싱처리를 처리하기 위해서 사용한다.

---

### Reference
https://simplevue.gitbook.io/intro/07.-computed-watch

[computed, methods와의 차이](https://kamang-it.tistory.com/entry/Vue23computed-%EA%B7%B8%EB%A6%AC%EA%B3%A0-methods%EC%99%80%EC%9D%98-%EC%B0%A8%EC%9D%B4featwatch)