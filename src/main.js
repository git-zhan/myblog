import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入国际化支持
import i18n from './lang/i18n'
// 引入SVG图标组件
import './components/svg/index'
// 引入markdown文本编辑器
import mavonEditor from '../node_modules/mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(ElementUI)

Vue.use(mavonEditor)
// 去掉生产提示
Vue.config.productionTip = false

// 去掉重复点击路由的提示
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
