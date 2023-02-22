<template>
	<section class="todoapp">
		<Header @insertTodo="insertTodo"/>
		<Todo
			v-bind:propsTodos="todos"
			@removeTodo="removeTodo"
			@updateDone="updateDone"
			@updateTodo="updateTodo"
		/>
		<Footer
			v-bind:filterType="filterType"
			v-bind:size="filteredList.length"
			@onFilterType="handleFilterType"
			/>
	</section>
</template>

<script>
import './assets/css/main.css';

import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: {
		Header, Todo, Footer
	},
	data() {
		return {
			todos: [
				{
					id: new Date(), // 클라이언트에서 고유한 값을 나타낼 수 있는 수단으로 date이용.
					text: 'Vue 공부하기', // todo의 내용
					isDone: true // 일이 마무리되었는지 판단하는 값
				},
				{
					id: new Date() + 1,
					text: '치킨 먹기',
					isDone: false
				},
			],
			// 기본 필터는 All로 지정
			filterType: 'All'
		}
	},
	methods: {
		// todo 추가
		insertTodo(text) {
			this.todos = [
				...this.todos,
				{
					id: new Date().getTime(),
					text,
					isDone: false,
				}
			]
		},
		// x버튼 클릭 시 리스트삭제
		removeTodo(id) {
			this.todos = this.todos.filter(item => item.id !== id);
		},
		// 체크 클릭 시 텍스트 취소선 생성
		updateDone(id) {
			const todos = [...this.todos];
			const todo = todos.find(item => item.id === id);

			if(todo) {
				todo.isDone = !todo.isDone;
				this.todos = todos;
			}
		},
		// 더블클릭 시 리스트 수정
		updateTodo({text, id}) {
			const todos = [...this.todos];
			const todo = todos.find(item => item.id === id);

			if(todo) {
				todo.text = text;
				this.todos = todos;
			}
		},
		// type을 받아 filterType업데이트
		handleFilterType(type) {
			this.filterType = type
		}
	},
	computed: {
		filteredList() {
			switch(this.filterType) {
				// 전체리스트
				case 'All': { return this.todos }
				// isDone이 false인 경우
				case 'Active': { return this.todos.filter((item) => !item.isDone) }
				// isDone이 true인 완료된 경우
				case 'Completed': { return this.todos.filter((item) => item.isDone) }
				default: { return [] }
			}
		}
	}
}
</script>

<style scoped>
</style>

<!-- https://simplevue.gitbook.io/intro/09.-todo -->