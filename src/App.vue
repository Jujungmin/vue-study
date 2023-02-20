<template>
	<div id="wrap">
		{{ message }}
		<h2>뒤집힌message</h2>
		<!-- {{ message.split('').reverse().join('') }} -->
		{{ reversedMessage }}
		<!-- reversedMessage() -> (X) :: 함수라고 만들어놨지만 리턴되는 값을 뷰가 알아서 data처럼 들고 있는 것. -->
		<!-- {{ reversedMessage2() }} -->
		<br/>
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
			message: 'Hello Vue!!',
			firstname: '',
			lastname: '',
			// fullname: '',
		}
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
			// input의 값이 바뀔때마다 methods가 호출된다.
			return this.message.split('').reverse().join('');
		}
	},
	// watch: {
	// 	firstname(val) {
	// 		this.fullname = `${val} ${this.lastname}`;
	// 	},
	// 	lastname(val) {
	// 		// console.log('lastname', val);
	// 		this.fullname = `${this.firstname} ${val}`;
	// 	}
	// },
	computed: {
		fullname() {
			return `${this.firstname} ${this.lastname}`;
		}
	}
}
</script>

<style scoped>
</style>