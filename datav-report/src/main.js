import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts // 这样每个组件在引入echarts 不需要每次都引入import Echarts from 'echarts'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
