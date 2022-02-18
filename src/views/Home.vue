<template>
  <div class="home">
    <div class="header">
      <div class="type-wrap" @click="toggle">
        <span class="title">{{ currentSelect.name || '全部类型' }}</span>
        <i class="iconfont leixing" />
      </div>
      <div class="data-wrap">
        <span class="time" @click="monthToggle">{{ currentTime }} <i class="iconfont sort-down" /></span>
        <span class="expense">总支出 ¥{{ totalExpense }}</span>
        <span class="income">总收入 ¥{{ totalIncome }}</span>
      </div>
    </div>
    <div class="content-wrap">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 介绍一下 van-pull-refresh 组件的几个属性： -->
      <!-- v-model="refreshing"： 也是用于展示下拉刷新的 loading 状态。 -->
      <!-- refresh：接收一个方法，用于重新加载数据 -->
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <!-- 介绍一下 van-list 组件的几个属性： -->
        <!-- v-model:loading：加载数据时它会被设置成 true，这样就会有加载数据的效果。 -->
        <!-- finished：当它为 false 代表列表数据还没有全部加载完，为 true 时，finished-text 的值就会被展示列表底部，这里是“没有更多了”，可自定义该值。 -->
        <!-- load：它接收的是一个方法，该方法用于列表数据，一进入页面，该方法就会被触发默认开始加载数据。 -->
          <CardItem v-for="item in list" :bill="item" :key="item" />
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="add" @click="addToggle">
      <van-icon name="records" />
    </div>
    <!-- 引入类型弹窗组件 -->
    <PopType ref="popRef" @select="select" />
    <PopMonth ref="popMonthRef" @select="selectMonth" />
    <PopAdd ref="popAddRef" @refresh="onRefresh" />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import CardItem from '../components/CardItem.vue'
import PopType from '../components/PopType.vue'
import PopMonth from '../components/PopMonth.vue'
import PopAdd from '../components/PopAdd.vue'
import axios from '../utils/axios'
import dayjs from 'dayjs' // 日期插件，使用于 H5 端，体积较小
/**
 * 注意 dayjs 插件，是类似 moment 插件的实现，所以它们在使用方式上基本是一致的，
 * 只不过 dayjs 将一些使用频率不高的方法做了删减，包的体积就变小了，对移动端更加友好。
 * 使用时，请通过 npm install dayjs 进行安装。
 */
export default {
  components: {
    CardItem,
    PopType,
    PopMonth,
    PopAdd
  },
  // 所有 setup 内部定义的函数和变量，都需要通过 return 抛出才能使用
  setup() {
    // 声明 ref，通过 popRef 可以拿到 PopType 组件内的属性和方法
    const popRef = ref(null)
    const popMonthRef = ref(null)
    const popAddRef = ref(null)
    // 添加账单弹窗开关
    const state = reactive({
      totalExpense: 0,
      totalIncome: 0,
      page: 1, // 列表分页
      totalPage: 0, // 总页数
      list: [], // 列表数据
      loading: false,
      finished: false,
      refreshing: false,
      currentSelect: {},
      currentTime: dayjs().format('YYYY-MM')
    })
    // 获取账单列表方法
    const getBillList = async () => {
      // 请求列表接口
      const { data } = await axios.get(`/bill/list?date=${state.currentTime}&type_id=${state.currentSelect.id || 'all'}&page=${state.page}&page_size=5`)
      console.log(data)
      // 如果 refreshing 为 true，代表下拉刷新了，需要重置 list = []
      if (state.refreshing) {
        state.list = []
        state.refreshing = false
      }
      state.loading = false
      // 通过 concat 将数据拼接在旧的 list 后面
      state.list = state.list.concat(data.list)
      state.totalExpense = data.totalExpense.toFixed(2)
      state.totalIncome = data.totalIncome.toFixed(2)
      state.totalPage = data.totalPage
      // 如果当前页 page 大于等于总页数 totalPage，则代表数据已经请求完，将 finished 设置为 true
      if (state.page >= state.totalPage) state.finished = true
    }
    // van-list 加载方法
    const onLoad = () => {
      // 当不是下拉刷新且当前页 page 小于总页数 totalPage，需要加载下一页的数据，所以这里将 state.page = state.page + 1
      if (!state.refreshing && state.page < state.totalPage) {
        state.page = state.page + 1
      }
      getBillList()
    }
    // van-pull-refresh 刷新方法
    const onRefresh = () => {
      // 清空列表数据
      state.finished = false;
      // 页数重制
      state.page = 1
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.refreshing = true
      state.loading = true;
      onLoad()
    }
    // 类型弹窗开关
    const toggle = () => {
      /**
       * PopTye 组件的 toggle 方法在 popRef.value 内可以找到，
       * 所以在此调用 popRef.value.toggle 方法，
       * 可以让弹窗的 show 属性变为 true，让弹窗从底部弹出。
       */
      popRef.value.toggle()
    }
    // 筛选类型
    /**
     * 这个方法将传入 PopType 组件，组件内部已经声明了 emit 触发下面的 select，
     * 并且附带了类型数据 item，所以在这里可以拿到属性，并将其显示到头部。
     */
    const select = (item) => {
      state.currentSelect = item
      onRefresh()
    }
    // 月份弹窗开关
    const monthToggle = () => {
      popMonthRef.value.toggle()
    }
    // 筛选月份
    const selectMonth = (item) => {
      state.currentTime = item
      onRefresh()
    }
    // 添加账单弹窗开关
    const addToggle = () => {
      console.log('popAddRef', popAddRef)
      popAddRef.value.toggle()
    }

    return {
      ...toRefs(state),
      popRef,
      popMonthRef,
      popAddRef,
      toggle,
      monthToggle,
      addToggle,
      onLoad,
      onRefresh,
      select,
      selectMonth
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../config/custom.less');

.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: @primary;
    color: #fff;
    font-size: 14px;
    padding: 20px 20px;
    z-index: 100;
    .type-wrap {
      background-color: @support;
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      position: relative;
      align-self: baseline;
      .title {
        margin-right: 22px;
      }
      .title::after {
        content: '';
        position: absolute;
        top: 12px;
        bottom: 11px;
        right: 32px;
        width: 1px;
        background-color: #e9e9e9;
      }
    }
    .data-wrap {
      margin-top: 10px;
      font-size: 13px;
      .time {
        margin-right: 12px;
        .sort-down {
          font-size: 12px;
        }
      }
      .expense {
        margin-right: 10px;
      }
    }
  }
  .content-wrap {
    height: calc(~"(100% - 50px)");
    overflow: hidden;
    overflow-y: scroll;
    background-color: @background;
    padding: 10px;
    // padding-bottom: 50px;
  }
  .add {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    color: @primary;
  }
}
/**
 * 样式分析
 * 头部部分很简单，.header 通过 flex 实现上下布局，这样对居中操作比较友好。
 * 这里要注意的是，之所以给 .home 一个 padding-top: 80px，是因为 header 的高度是 80px，
 * 而 .header 定位到了顶部，方便后面列表滚动的时候，header 一直都出现在顶部。
 * 这样会导致 header 脱离文档流，列表会顶上去，所以这里才会给 .home 一个 80 的内边距。
 */
</style>