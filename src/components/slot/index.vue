<template>
  <div class="">
    <Header class="header">
      <slot name="header"></slot>
    </Header>
    <main class="main">
      <div v-for="item in slotDdta">
        <slot :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface slots {
  name: string;
  age: number;
}
const slotDdta = reactive<slots[]>([
  { name: "小明", age: 18 },
  { name: "小红", age: 16 },
  { name: "小干", age: 20 },
]);
</script>

<style lang="less" scoped>
.header {
  background: rgb(178, 240, 7);
  height: 200px;
}
.main {
  background: rgb(12, 168, 224);
  height: 200px;
}
.footer {
  background: rgb(242, 8, 168);
  height: 200px;
}
</style>
