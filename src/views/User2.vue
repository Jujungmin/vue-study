<template>
    <div>
        <h2>The user2 is {{ id }}</h2>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style scoped>
h2 {color:steelblue;}
</style>