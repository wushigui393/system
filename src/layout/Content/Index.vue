<template lang="">
  <div class="content">
    <!-- 我是瀑布流，我主要展示父传子 -->
    <!-- <water_fall
      title="我是标题"
      :data="data"
      @on-click="onClick"
      :list="list"
    ></water_fall> -->

    <!-- 我展示的是局部组件
    <Card></Card>

    我展示的是动态组件

    我展示的是插槽
    <Slot>
      <template v-slot:header>
        <div>12356</div>
      </template>
      <template v-slot="{ data }">
        <div>我叫{{ data.name }},今年{{ data.age }}岁了</div>
      </template>
    </Slot> -->
    <!-- </div> -->
    <Tab></Tab>
  </div>
</template>

<!-- 我展示的是异步组件 -->
<!-- <template>
  <Suspense>
    <template #default> <SyncVue></SyncVue></template>
    <template #fallback>加载中... </template>
  </Suspense>
</template> -->

<script setup lang="ts">
import water_fall from "../../views/water_falll/waterFall.vue"; //瀑布流（父传子）
// import Card from "../../components/expame/card.vue"; //局部组件
import Tab from "../../components/table/index.vue"; //动态组件
import Slot from "../../components/slot/index.vue"; //插槽

import { reactive, defineAsyncComponent } from "vue";

const SyncVue = defineAsyncComponent(
  () => import("@/components/sync/sync.vue")
);
const data = reactive<number[]>([1, 2, 3]);
</script>

<style scoped lang="less">
.content {
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background-color: #f0f2f5;
  }
  height: 100%;
}
</style>
