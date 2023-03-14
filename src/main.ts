import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'  //引入路由

import './assets/css/reset.less' //全局格式初始化


//引入UI组件
import ElementPlus from "element-plus";

import 'element-plus/dist/index.css'

import './assets/main.css'

//暗黑模式
import './styles/element/index.scss'

//内置动画引入
import { ElCollapseTransition } from 'element-plus'

//引入图表按钮
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入总线Bus
import mitt from 'mitt'
const Mit = mitt()
declare module "vue" {
  export interface ComponentCustomProperties {
      $Bus: typeof Mit
  }
}


import CardView from './components/expame/card.vue'  //引入全局组件

import App from './App.vue' 
const app = createApp(App)

//全局挂载图标
app.component(ElCollapseTransition.name, ElCollapseTransition)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.component('Card',CardView)  //使用全局组件

//Vue3 bus挂载全局API
app.config.globalProperties.$Bus = Mit

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
