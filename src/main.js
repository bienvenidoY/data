import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import VueCompositionApi from '@vue/composition-api'

import VueTianditu from 'vue-tianditu';
import { Button, Select, Table, Dialog, Message } from 'element-ui';

Vue.config.productionTip = false

// 系统按需组件
Vue.use(Button)
  .use(Select)
  .use(Table)
  .use(Dialog)
Vue.prototype.$message = Message;

Vue.use(VueCompositionApi)

Vue.use(VueTianditu, {
  v: '4.0',
  tk: 'your map token'
});
new Vue({
  render: h => h(App),
}).$mount('#app')
