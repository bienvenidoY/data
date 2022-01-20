import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import VueCompositionApi from '@vue/composition-api'

import VueTianditu from 'vue-tianditu';
import { Button, Select, Table, Dialog, Message, Form, FormItem ,Carousel, CarouselItem } from 'element-ui';

Vue.config.productionTip = false

// 系统按需组件
Vue.use(Button)
  .use(Select)
  .use(Table)
  .use(Dialog)
  .use(Carousel)
  .use(Form)
  .use(FormItem)
  .use(CarouselItem)
Vue.prototype.$message = Message;

Vue.use(VueCompositionApi)

Vue.use(VueTianditu, {
  v: '4.0',
  tk: '228fac3f70384e8c8cbcedf2c25e2049'
});
new Vue({
  render: h => h(App),
}).$mount('#app')
