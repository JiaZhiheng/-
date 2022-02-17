<template>
  <!-- 占位标签，给的高度和 NavBar 组件一样高，这样就能将顶部撑开，不会让页面有一部分隐藏在 NavBar 后面 -->
  <div class="block"></div>
  <!-- 引入 NavBar 组件，title 通过变量的形式从外部传入 再给一个固定定位，将它固定在页面的顶部，此时下方的页面便会顶上来 -->
  <van-nav-bar class="header" @click-left="back" :title="title" left-text="返回" left-arrow>
    <template #right>
      <!-- iconfont 的字体图标 -->
      <i class="iconfont more" />
    </template>
  </van-nav-bar>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  // 外部引用组件时传入的 title 变量 点击公用头部的左侧“返回”时，需要做出响应
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup() {
    const router = useRouter()
    // 点击之后调用 router.back() 返回上一级
    // 返回方法
    const back = () => {
      router.back()
    }

    return {
      back
    }
  }
}
</script>

<style lang='less' scoped>
  .block {
    width: 100%;
    height: 46px;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .more {
      font-size: 20px;
    }
  }
</style>