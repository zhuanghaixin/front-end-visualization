<template>
    <div>
      <common-card title="累计用户数" value="1,555,322">
        <template>
          <div id="total-users-chart" :style="{width:'100%',height:'100%' }">

          </div>

        </template>
        <template v-slot:footer>
            <div class="compare-wrapper">
              <div class="compare">
                <span>日同比</span>
                <span  class="emphasize">1.37%</span>
                <div class="increase"></div>
              </div>
              <div class="compare">
                <span>月同比</span>
                <span  class="emphasize">26.47%</span>
                <div class="decrease"></div>
              </div>
            </div>
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
    const charDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(charDom)
    const option = {
      xAxis: {
        type: 'value',
        show: false

      },
      yAxis: {
        type: 'category',
        show: false

      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      series: [{
        type: 'bar',
        data: [150],
        barWidth: 10,
        itemStyle: {
          color: '#6dc559'
        },
        stack: '总量' // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
      },
      {
        type: 'bar',
        data: [250],
        barWidth: 10,
        itemStyle: {
          color: '#eee'
        },
        stack: '总量'
      },
      {
        type: 'custom',
        stack: '总量',
        data: [150],
        renderItem: (params, api) => {
          const value = api.value(0) // api.value(...)，意思是取出 dataItem 中的数值。例如 api.value(0) 表示取出当前 dataItem 中第一个维度的数值。
          console.log(value)
          const endPoint = api.coord([value, 0]) // api.coord(...)，意思是进行坐标转换计算。例如 var point = api.coord([api.value(0), api.value(1)]) 表示 dataItem 中的数值转换成坐标系上的点。
          console.log(endPoint)
          //  series-custom.renderItem. return 图形元素。每个图形元素是一个 object。详细信息参见：graphic。（width\height\top\bottom 不支持
          return {
            type: 'group',
            position: endPoint, // 坐标
            children: [
              {
                type: 'path',
                shape: {
                  d: 'M952.32 715.2l-416-485.376c-12.16-14.176-36.448-14.176-48.608 0l-416 485.376c-8.128 9.472-9.984 22.848-4.768 34.176C72.16 760.704 83.488 768 96 768h832c12.512 0 23.84-7.296 29.056-18.624s3.392-24.704-4.736-34.176z', // svg图像内容
                  x: -10,
                  y: 5,
                  width: 20,
                  height: 20,
                  layout: 'cover'
                },
                // series-custom.renderItem.return_path.shape. pathDatastring
                // 即 SVG PathData。 d同pathdata
                // 例如：'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z'。
                // 如果指定了 width、height、x、y，则会根据他们定义的矩形，缩放 PathData。如果没有指定这些，就不会缩放。
                // 可使用 layout 指定缩放策略。
                // 参见例子： icons 和 shapes。
                style: {
                  fill: '#6dc559'
                }
              },
              {
                type: 'path',
                shape: {
                  d: 'M957.056 338.624C951.84 327.296 940.512 320 928 320L96 320c-12.512 0-23.84 7.296-29.088 18.624-5.216 11.36-3.328 24.704 4.768 34.208l416 485.344c6.08 7.104 14.944 11.2 24.288 11.2s18.208-4.096 24.288-11.2l416-485.344C960.448 363.328 962.272 349.984 957.056 338.624z', // svg图像内容
                  x: -10,
                  y: -25,
                  width: 20,
                  height: 20,
                  layout: 'cover'
                },
                // series-custom.renderItem.return_path.shape. pathDatastring
                // 即 SVG PathData。 d同pathdata
                // 例如：'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z'。
                // 如果指定了 width、height、x、y，则会根据他们定义的矩形，缩放 PathData。如果没有指定这些，就不会缩放。
                // 可使用 layout 指定缩放策略。
                // 参见例子： icons 和 shapes。
                style: {
                  fill: '#6dc559'
                }
              }
            ]

          }
        }

      }
      ]
    }
    chart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
  .compare-wrapper{
    display: flex;
    align-items: center;
    .compare{
      display: flex;
      align-items: center;
      &:nth-child(2){
        margin-left: 10px;
      }
    }

  }
</style>
