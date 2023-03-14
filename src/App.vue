<template>
  <div class="app">
    <Layout></Layout>
  </div>
  <!-- <A></A> -->
</template>
<script setup lang="ts">
import A from "./components/AView.vue";
import Layout from "./layout/Index.vue";
import { ref, toRef, reactive, watch, watchEffect, toRefs } from "vue";
</script>

<style lang="less">
html,
body,
#app,
.app {
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>
