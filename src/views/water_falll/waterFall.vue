<template>
  <div class="wraps">
    <!-- <h3>{{ title }}</h3>
    <div>
      {{ data }}
    </div>
    <button @click="clickTab">我要传给父组件</button> -->
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px',
      }"
      v-for="item in waterList"
      class="items"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
// <!-- ts格式 -->
// const props = defineProps<{ list: any[] }>();

// js格式
// defineProps({
//   title: String,
//   data: Array,
// });
//父传子默认值
// type Props = {
//   title?: string;
//   data?: Number[];
// };
// withDefaults(defineProps<Props>(), { title: "张三", data: () => [9, 96, 5] });

//子传父
// const emit = defineEmits(["on-click"]);
// const clickTab = () => {
//   emit("on-click", list);
// };

const props = defineProps<{ list: any[] }>();

const waterList = reactive<any[]>([]);
const init = () => {
  const heightList: any[] = [];
  const width = 130; //设置每个元素的宽度
  const x = document.body.clientWidth - 200; //当前屏幕的宽度，-200是为了获得当前瀑布流的占用宽度
  const column = Math.floor(x / width); //计算每个行可以至多放几个元素

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = 10;
      props.list[i].left = i * width;
      heightList.push(props.list[i].height + 10);
      waterList.push(props.list[i]);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      });
      // console.log(current, "c");
      props.list[i].top = current + 20;
      // console.log(props.list[i].top, "top", i);
      props.list[i].left = index * width;
      heightList[index] = heightList[index] + props.list[i].height + 20;
      waterList.push(props.list[i]);
    }
  }
  // console.log(props.list);
};

onMounted(() => {
  window.onresize = () => init();
  init();
});
</script>
<style lang="less" scoped>
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
