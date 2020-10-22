<template>
<!--  <ve-line :options="data"></ve-line>-->
<!--  v-chart 适合快速生成不需要修改的 地图比较好用-->
  <v-chart :options="data"/>
<!--  &lt;!&ndash; 1.   不用设置宽高&ndash;&gt;-->
<!--  &lt;!&ndash;  2.   不用获取echarts的实例&ndash;&gt;-->

</template>

<script>
export default {
  name: 'index',
  // vue-charts
  data () {
    return {
      data: {
        xAxis: {},
        yAxis: {},
        series: [{
          type: 'line',
          data: [100, 200, 300]
        }]
      }
    }
  }
  // v-chart
  // data () {
  //   return {
  //     chartData: {
  //       columns: ['日期', '访问用户', '下单用户', 'test'],
  //       rows: [
  //         { 日期: '2018-05-22', 访问用户: 32371, 下单用户: 19810, test: 1000 },
  //         { 日期: '2018-05-23', 访问用户: 12328, 下单用户: 4398, test: 30000 },
  //         { 日期: '2018-05-24', 访问用户: 92381, 下单用户: 52910, test: 40000 }
  //       ]
  //     }
  //
  //   }
  // }
}

</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
