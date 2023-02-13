<template>
    <!-- <div class="box" v-bind:style="{width: width + 'px', height: height + 'px'}"></div> -->
    <div 
    v-bind:class="['box', bgColor, color]" 
    v-bind:style="{width: width + 'px', height: height + 'px'}"
    >
    BOX
    </div>
</template>

<script>
export default {
    props: {
        bgColor: { type: String, default: 'defaultBg' }, // App.vue(부모컴포넌트)에 class가 없으면 default 적용
        color: {type: String, default: 'defaultC' }
    },
    data() {
        return {
            width: 40,
            height: 80
        }
    }
}
</script>

<style scoped>
.box {border: 1px solid #000;}
.blue {background:#009bff;}
.purple {background:#8f46ff;}
.green {background:#00bcac;}
.black {color:#000;}
.white {color:#fff;}
.defaultBg {background:#ddd;}
.defaultC {color:#777;}
</style>