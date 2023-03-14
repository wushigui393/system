<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="menu" :style="{ width: !flags ? '65px' : '210px' }">
          <Menu></Menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Content />
        </el-main>
        <el-footer> <Footer></Footer> </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/Index.vue";
import Footer from "./Footer/index.vue";

import { ref, getCurrentInstance } from "vue";

const flags = ref<Boolean>(true);
const instance = getCurrentInstance();
instance?.proxy?.$Bus.on("on-click", (flag: any) => {
  flags.value = flag.value;
});
</script>

<style scoped lang="less">
.common-layout {
  height: 100%;
  width: 100%;
  display: flex;
}

.el-header {
  --el-header-padding: 0;
  height: 55px;
  border-bottom: 1px solid #e4e7ed;
}
.el-aside {
  width: auto;
  overflow: inherit;
  background-color: #f5f6fa;
  border-right: 1px solid #f5f6fa;
  .menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all 0.3s ease;
    .el-scrollbar {
      height: calc(100% - 55px);
      .el-menu {
        overflow-x: hidden;
        border-right: none;
      }
    }
    .logo {
      box-sizing: border-box;
      height: 55px;
      border-bottom: 1px solid #f5f6fa;
      span {
        font-size: 21.5px;
        font-weight: bold;
        color: #333;
        white-space: nowrap;
      }
      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: contain;
        margin-right: 6px;
      }
    }
  }
}
.el-main {
  --el-main-padding: 15px;
  background: #eff1f4;
}
.el-footer {
  --el-footer-padding: 0;
  height: 30px;
  background: #fff;
  border-top: #e4e7ed;
}
</style>
