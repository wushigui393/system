<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="!isCollapse"
    text-color="#FFF"
    active-text-color="#409EFF"
    :unique-opened="true"
    popper-effect="light"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">
        <template #title>授权中心</template>
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="2">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref<boolean>(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const instance = getCurrentInstance();
instance?.proxy?.$Bus.on("on-click", (flag: any) => {
  isCollapse.value = flag.value;
});
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  background-color: #191a20;

  /* min-height: 400px; */
}
.el-menu-item {
  background: #191a20;
  height: calc(100% - 55px);
  .el-menu {
    overflow-x: hidden;
    border-right: none;
  }
}

.el-menu-item.is-active {
  background: #060708;
  border: none;
  border-left: 3px solid #009688;
}
</style>
