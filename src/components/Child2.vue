<template>
    <li class="product-item">
        <img v-bind:src="propProduct.img" v-bind:alt="propProduct.title"/>
        <div class="product-content">
            <h3 class="title">{{ propProduct.title }}</h3>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Child2',
    props: {
        propProduct: { type: Object, default: () => {} }
    }
}
</script>

<style>
.product-item {display:flex; flex-direction:row; justify-content:center; flex-wrap:wrap; align-items:center; list-style:none; margin:10px;}
.product-content {margin-left:10px;}
</style>