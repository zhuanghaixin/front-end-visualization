<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <!-- 菜单导航 -->
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">
              销售额
            </el-menu-item>
            <el-menu-item index="2">
              访问量
            </el-menu-item>
          </el-menu>
          <div class="menu-right">
            <!-- RadioButtonGroup -->
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <!--  日期选择器       -->
              <el-date-picker
                size="small"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                class="sales-view-date-picker"
                :picker-options="pickerOptions"
                v-model="timeValue"
              ></el-date-picker>
          </div>

        </div>

      </template>
      <template>

      </template>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      // 菜单
      activeIndex: '1',
      radioSelect: '今年',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              console.log(picker)
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end], true)
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end], ture)
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end], true)
            }
          }
        ]
      },
      timeValue: ''
    }
  },
  methods: {
    // 菜单
    onMenuSelect (index) {
      console.log(index)

      this.activeIndex = index
    }

  }

}

</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
    .menu-wrapper{
      position: relative;
      display: flex;
      .sales-view-menu{
        width: 100%;
        padding-left: 20px;
        .el-menu-item{
          height: 50px;
          line-height: 50px;
          margin: 0 20px;
        }
      }
      .menu-right{
        position: absolute;
        right: 20px;
        top: 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .sales-view-date-picker{
          margin-left: 20px;
        }
      }
    }

}

</style>
