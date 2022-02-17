<template>
  <div class="about">
    <Header title='关于我们' />
    <van-divider
      content-position="left"
      :style="{ color: '#1ee3cf', borderColor: '#1ee3cf', padding: '0 16px' }"
    >
      关于作者
    </van-divider>
    <div class="content">
      大家好，我是本项目的作者贾志恒，现就读于塔里木大学，所学专业为网络工程，在北京某互联网公司参加前端开发实习工作。
    </div>
    <van-divider
      content-position="left"
      :style="{ color: '#1ee3cf', borderColor: '#1ee3cf', padding: '0 16px' }"
    >
      关于项目
    </van-divider>
    <div class="content">
      <p>本项目是一个记账 H5 页面前端项目（模仿微信记账本），基于Vue 3.0 + Vant 3.0 实现，主要包括明细、统计、个人中心、登录、注册、详情页等。</p>
      <p>项目中使用到的技术包括 Vite 构建项目、flexible 移动端适配、Vant 3.x 组件库、Vue-Router 4.x 路由插件、Echarts 5.x 图表插件等等。</p>
      <p>本项目服务端接口文档为：<a href="https://www.yuque.com/docs/share/2549e10c-5e01-4ae4-94c6-0fc475cd7a72?#" target="_blank">接口文档（密码：dzrl）</a></p>
      <p>本项目GitHub源码地址为：<a href="https://github.com/JiaZhiheng/Daisy-Bill" target="_blank">源码地址</a></p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'About',
  components: {
    Header
  }
}
</script>

<style lang="less">
  .about {
    .content {
      padding: 0 16px;
      font-size: 14px;
      color: rgba(0, 0, 0, .5);
      line-height: 24px;
      p {
        margin-bottom: 10px;
      }
    }
  }
</style>