<template>
  <div class="card">
    <header>
      <div>主标题</div>
      <div>副标题</div>
    </header>
    <section>内容</section>
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
</script>

<style lang="less" scoped>
@border: #ccc;
.card {
  border: 1px solid @border;
  width: 400px;
  header {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    border-bottom: 1px solid @border;
  }
  section {
    padding: 15px;
    font-size: 18px;
    min-height: 280px;
  }
}
</style>
