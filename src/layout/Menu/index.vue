<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Menubox">
    <H2>
      <img src="@/assets/logo.svg" alt="" />
      <span>Lisence Web</span>
    </H2>
    <MenuView></MenuView>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import MenuView from "./Menu.vue";

import { ref, getCurrentInstance } from "vue";
</script>

<style scoped lang="less">
.Menubox {
  H2 {
    box-sizing: border-box;
    padding: 0 18px;
    display: flex;
    align-items: center;
    font-size: 20.5px;
    color: #fff;
    height: 55px;
    border-bottom: 1px solid #282a35;
    img {
      width: 30px;
      margin-right: 8px;
    }
  }
  height: 100%;
  background: #191a20;
}
</style>
