import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'
import VueEcharts from 'vue-echarts'
import './style/index.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts // 这样每个组件在引入echarts 不需要每次都引入import Echarts from 'echarts'
Vue.component('v-chart', VueEcharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
