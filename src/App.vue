<template>
  <!-- 和 vue-router3 一样，展示路由的组件的地方 -->
  <router-view />
  <!-- 添加一个 show 变量用于控制是否显示底部导航栏 -->
  <NavBar v-if="show" />
</template>

<script>
import NavBar from './components/NavBar.vue';
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const state = reactive({
      menu: ['/user', '/home', '/data'],
      show: false
    })
    const router = useRouter()
    router.afterEach(() => {
      // menu 内的路径都是需要展示底部导航栏的
      state.show = state.menu.includes(router.currentRoute.value.path)
    })
    /**
     * 需要导航栏的页面路径，通过引入 useRouter 拿到 router 实例，
     * 实例中有一个方法属性，名为 afterEach，它的作用是当更换路径时，会执行回调方法
     * 在回调方法内通过 router.currentRoute.value.path 属性拿到当前路径，
     * 根据 menu 变量去做判断，
     * 如果当前路径在 menu 数组内，则返回 true 赋值给 show 变量
     * 这样就能动态的控制底部导航栏的显示隐藏
     */

    return {
      ...toRefs(state)
    }
  }
}
</script>
