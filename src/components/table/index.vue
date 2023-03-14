<!-- <***动态组件***> -->
<template>
  <div class="tab_box">
    <div
      class="item"
      :class="[Tind == index ? 'active' : '']"
      @click="tableClick(item, index)"
      v-for="(item, index) in tab"
    >
      {{ item.name }}
    </div>
  </div>
  <component :is="comId"></component>
</template>

<script setup lang="ts">
import Aview from "./A.vue";
import Bview from "./B.vue";
import Cview from "./C.vue";
import { reactive, ref, shallowRef, markRaw } from "vue";

const Tind = ref(0);

const comId = shallowRef(Aview);

const tableClick = (item: any, index: number) => {
  Tind.value = index;
  comId.value = item.com;
};

const tab = reactive([
  {
    name: "A",
    com: markRaw(Aview),
  },
  {
    name: "B",
    com: markRaw(Bview),
  },
  {
    name: "C",
    com: markRaw(Cview),
  },
]);
</script>

<style lang="less" scoped>
@border: #eee;
.tab_box {
  margin-top: 20px;
  display: flex;
  width: 400px;
  .item {
    border: 1px solid #ccc;
    padding: 8px 30px;
    margin-right: 40px;
    cursor: pointer;
  }
  .active {
    background: rgb(40, 193, 240);
    color: #fff;
  }
}
</style>
