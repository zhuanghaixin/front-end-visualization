<template>
    <div>
      <common-card title="累计订单量" value="3,054,982">
        <template>
          <div id="total-orders-chart" :style="{width:'100%',height:'100%' }">

          </div>

        </template>
        <template v-slot:footer>
          <span> 昨日订单量 </span>
          <span class="emphasize">2,000,000</span>
        </template>
      </common-card>
    </div>

</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'index',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    // 基于准备好的dom，初始化echarts实例  //设置主题 light/dark
    const chart = this.$echarts.init(chartDom)
    // 指定图表的配置项和数据
    const option = {
      // dataset: {
      //   source: {
      //     time: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
      //     orders: [620, 432, 220, 534, 790, 430, 220, 320, 834, 690, 530, 220, 620, 700]
      //   }
      // },
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false

      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 220, 320, 834, 690, 530, 220, 620], // 使用dataset
        seriesLayoutBy: 'row',
        // 设置折线面积
        areaStyle: { color: 'purple' },
        smooth: true,
        lineStyle: { width: 0 },
        itemStyle: { opacity: 0 }

      }]
    }
    chart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>

</style>
