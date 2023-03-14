<template>
  <div class="sync_box">
    <img :src="data.url" alt="" />
    <div>姓名：{{ data.name }}</div>
    <div>年龄：{{ data.age }}</div>
    <div>{{ data.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import { axios } from "@/serve/axios";

interface Data {
  data: {
    name: string;
    age: number;
    url: string;
    desc: string;
  };
}
const { data } = await axios.get<Data>("./data.json");
</script>

<style lang="less" scoped>
.sync_box {
  img {
    width: 50px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
