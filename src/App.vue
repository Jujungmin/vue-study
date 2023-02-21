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

<style scoped>
nav a,
nav a:active {color:#555; text-decoration:none;}
nav a.router-link-active{text-decoration:underline;}
</style>
