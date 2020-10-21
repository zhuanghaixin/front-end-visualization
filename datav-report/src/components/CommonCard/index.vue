<template>
  <div class="commonn-card">
    <!--    公共组件抽取 title/value/chart/line/total-->
    <div class="title">
      {{title}}
    </div>
    <div class="value">
      {{value}}
    </div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line">
    </div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    title: {
      type: String,
      default: 'XXX'
    },
    value: {
      type: String,
      default: 'XXX'
    }
  }

}
</script>

<style lang="scss" scoped>
.title{
  font-size: 12px;
  color: #999;
}
  .value{
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart{
    height: 50px;
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    color: #666;
    font-size: 12px;

  }
</style>
