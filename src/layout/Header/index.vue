<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <div class="header">
    <div class="coll_style" @click="onClick">
      <el-icon :size="22" v-show="flag">
        <Fold />
      </el-icon>
      <el-icon :size="22" v-show="!flag"><Expand /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";

const flag = ref<boolean>(true);

const instance = getCurrentInstance();

const onClick = () => {
  flag.value = !flag.value;
  instance?.proxy?.$Bus.emit("on-click", flag);
};
</script>

<style scoped lang="less">
.header {
  height: 55px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  .coll_style {
  }
}
</style>
