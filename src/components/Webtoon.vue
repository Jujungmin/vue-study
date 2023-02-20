<template>
    <h2>Webtoon</h2>
    <ul class="list">
        <li class="list-item" v-for="(item,idx) in propsItem" v-bind:key="idx">
            <a v-bind:href="item.link" target="_blank" v-bind:alt="item.name">
                <img v-bind:src="item.img"/>
                <span class="tit">제목 : {{ item.name }}</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        propsItem: { type: Array, default: () => {} }
    }
}
</script>

<style scoped>
h2 {text-align:center;}
a {list-style:none; text-decoration:none;}
li {list-style:none;}
.list {max-width:450px; width:100%; margin:0 auto;}
.list-item {border-bottom:1px solid #ebebeb; margin-bottom:25px;}
.tit {display:inline-block; font-size:18px; font-weight:bold; color:#000; padding:20px 15px;}
img {width:100%; background:#ebebeb; border-radius:4px;}
</style>