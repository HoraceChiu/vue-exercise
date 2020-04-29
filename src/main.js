import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './myApp'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// App 是我们的最顶级页面
// 将App.vue 当成组件， 写了新的页面模板 myApp.vue, 拼接了原来的
// 模块
// eslint-disable-next-line
new Vue({ el: '#app', render: h => h(App) })
