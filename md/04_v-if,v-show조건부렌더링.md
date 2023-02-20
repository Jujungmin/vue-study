# v-if, v-show를 이용한 조건부 렌더링
## v-if
``` javascript
<div v-if="true">True</div>
<div v-if="false">False</div>
```

`v-if`는 조건에 해당하지 않다면 렌더링을 하지 않는다.
## v-else
`v-else`는 `v-if` 와 함께 이용할 수 있다. 앞의 조건이 성립되지 않으면 `else`조건이 동작한다.
``` javascript
<div v-if="false">True</div>
<div v-else>False</div>
```