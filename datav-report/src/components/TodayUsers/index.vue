<template>
  <div>

    <common-card title="今日交易用户数" value="584,025">
      <template>
<!--        <div id="today-users-chart" :style="{width:'100%',height:'100%' }">-->

<!--        </div>-->
        <v-chart :options="getOptions()"></v-chart>

      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasize">6.43%</span>
      </template>
    </common-card>
  </div>

</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'index',
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
          show: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          name: '直接访问',
          data: [420, 50, 200, 300, 400, 420, 120, 40, 560, 330, 630, 340, 140, 220],
          barWidth: '60%'
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        color: ['#5197d5'],
        tooltip: {
          trigger: 'axis',
          //  格式化文本
          // formatter: function (params, ticket, callback) {
          //   console.log(params)
          //   var res = params[0].name
          //   for (var i = 0, l = params.length; i < l; i++) {
          //     res += '<br/>' + params[i].seriesName + ':' + params[i].value
          //   }
          //   setTimeout(function () {
          //     callback(ticket, res)
          //   }, 100)
          //   return 'loading'
          // },
          axisPointer: {
            type: 'line', // 指示器类型。
            axis: 'x',
            lineStyle: {
              color: 'red',
              type: 'dotted'
            },
            animation: true,
            label: {
              show: true,
              formatter: (params) => {
                return params.value
              }
            }
          }
        }
      }
    }
  }
  // mounted () {
  //   const chartDom = document.getElementById('today-users-chart')
  //   const chart = this.$echarts.init(chartDom)
  //   const option = {
  //     xAxis: {
  //       type: 'category',
  //       data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
  //       show: false
  //     },
  //     yAxis: {
  //       show: false
  //     },
  //     series: [{
  //       type: 'bar',
  //       name: '直接访问',
  //       data: [420, 50, 200, 300, 400, 420, 120, 40, 560, 330, 630, 340, 140, 220],
  //       barWidth: '60%'
  //     }],
  //     grid: {
  //       top: 0,
  //       bottom: 0,
  //       left: 0,
  //       right: 0
  //     },
  //     color: ['#5197d5'],
  //     tooltip: {
  //       trigger: 'axis',
  //       //  格式化文本
  //       // formatter: function (params, ticket, callback) {
  //       //   console.log(params)
  //       //   var res = params[0].name
  //       //   for (var i = 0, l = params.length; i < l; i++) {
  //       //     res += '<br/>' + params[i].seriesName + ':' + params[i].value
  //       //   }
  //       //   setTimeout(function () {
  //       //     callback(ticket, res)
  //       //   }, 100)
  //       //   return 'loading'
  //       // },
  //       axisPointer: {
  //         type: 'line', // 指示器类型。
  //         axis: 'x',
  //         lineStyle: {
  //           color: 'red',
  //           type: 'dotted'
  //         },
  //         animation: true,
  //         label: {
  //           show: true,
  //           formatter: (params) => {
  //             return params.value
  //           }
  //         }
  //       }
  //     }
  //   }
  //   chart.setOption(option)
  // }
}
</script>

<style lang="scss" scoped>

</style>
