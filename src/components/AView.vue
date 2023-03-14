<template>
    <div class="box">
        我是组件，我来啦
    </div>
    <div ref="div">{{ str }}</div>

</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
//beforeCreate , created  setup语法糖是没有这两个生命周期的。可以用setup去代替。

const str = ref<string>('我是小金')

const div = ref<HTMLDivElement>()

//创建之前
onBeforeMount(() => {
    console.log('我是个创建之前', div.value);

})
//创建之后
onMounted(() => {
    console.log('我是创建之后', div.value);
})
//


</script>

<style scoped>
.box {
    font-size: 25px;
}
</style>