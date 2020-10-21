<template>
  <div>
    <common-card title="累计销售额" value="¥ 30,500,602">
      <template>
        <div class="compare"></div>
      </template>
      <template v-slot:footer>
        <div>
          <span>昨日销售额</span>
          <span class="money">¥ 30,000,000</span>
        </div>
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
  .compare{
    background-color: #f00;
    height: 100%;
  }
  span {
    font-size: 12px;
  }

  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
