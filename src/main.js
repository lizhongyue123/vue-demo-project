import Vue from 'vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css'

import './icons/iconfont/iconfont.css'
import './icons/iconfont/iconfont.js'
import '@/icons' // 引入svg-icon

import App from './App.vue'

import { isEqual, isEmpty, isNil } from 'lodash/lang'
import { debounce } from 'lodash/function'

Object.defineProperties(Vue.prototype, {
  lodash_isEqual: { value: isEqual },
  lodash_isEmpty: { value: isEmpty },
  lodash_isNil: { value: isNil },
  lodash_debounce: { value: debounce }
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
           router,
  store,
  render: h => h(App),
}).$mount('#app')
