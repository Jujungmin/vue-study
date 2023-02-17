<template>
    <nav>
        <ul class="menu">
            <li class="item" v-for="(item) in propsItem" v-bind:key="item.id">
                <a v-bind:href="'/' + item.title">{{ item.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Child1',
    props: {
        propsItem : { type: Object, default: () => {
            return {
                id: '',
                title: '',
            }
        } }
    }
}
</script>
<style>
.menu {display:flex; justify-content:center; padding:10px; border-radius:5px; background:steelblue; list-style:none;}
.item {padding:10px;}
.item a {color:#fff; text-decoration:none;}
</style>