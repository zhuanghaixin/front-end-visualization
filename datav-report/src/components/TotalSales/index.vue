<template>
  <div>
    <common-card title="累计销售额" value="¥ 30,500,602">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span  class="emphasize">16.67%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span  class="emphasize">31.47%</span>
            <div class="decrease"></div>
          </div>
        </div>

      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasize">¥ 30,000,000</span>
      </template>
    </common-card>
  </div>

</template>

<script>
/*
        *TotalSales,TotalOrders,TodayUsers,TotalUsers
        *这些组件中都有 import CommonCard from '@/components/CommonCard'
        *   components: {
        * CommonCard
        * }
        * 明显重复了，所以我们可以用minxins抽离出来
        * */
// import CommonCard from '@/components/CommonCard'

import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'index',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .compare-wrapper{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content:center;

    color:#666;
    .compare {
      display: flex;
      align-items: center;
      margin-top: 3px;

      span {
        font-size: 12px;
        color:inherit;
      }
    }
  }

</style>
