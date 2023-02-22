<template>
	<header class="header">
		<h1>todos</h1>
		<input 
		class="new-todo" 
		v-model="write" 
		@keypress="handleTodo" 
		autofocus autocomplete="off" 
		placeholder="what needs to be done?" 
		/>
		<!-- <span style="color:#888; font-size:24px">text: {{ write }}</span> -->
	</header>
</template>

<script>
export default {
	data() {
		return {
			write: ''
		}
	},
	methods: {
		handleTodo({keyCode}) {
			const { write } = this;
			if(keyCode === 13 && write !== '') {
				this.$emit('insertTodo', write);
				this.write = '';
			}
		}
	}
}
</script>

<style scoped>
h1 {position:absolute; top:-155px; width:100%; font-size:100px; font-weight:100; text-align:center; color:rgba(275,47,47,0.15); text-rendering: optimizeLegibility;}
</style>