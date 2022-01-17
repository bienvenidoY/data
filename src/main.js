import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'

// 系统按需组件
import { Button, Select, Table, Dialog, Message } from 'element-ui';
Vue.use(Button)
  .use(Select)
  .use(Table)
  .use(Dialog)
  .use(Message)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
