<template>
  <!-- 通过 type 属性来给 title 赋值“登录”或“注册” -->
  <Header :title="type == 'login' ? '登录' : '注册'" />
  <div class="auth">
    <img class="logo" src="../assets/flower.png" alt="">
    <!-- 通过 v-if 结合 type 变量来显示或隐藏登录表单 -->
    <van-form class="form-wrap" @submit="onSubmit" v-if="type == 'login'">
      <div class="form">
        <van-field
          clearable
          v-model="username"
          name="username"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '账号不能为空！' }]"
        />
        <van-field
          clearable
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空！' }]"
        />
      </div>
      <div style="margin: 16px 0;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
        <!-- 切换方法，在登录页面，点击传 register，通过 changType 进行赋值 -->
        <p @click="chanegType('register')" class="change-btn">没有账号，前往注册</p>
      </div>
    </van-form>
    <!-- 通过 v-if 结合 type 变量来显示或隐藏注册表单 -->
    <van-form class="form-wrap" @submit="onSubmit" v-if="type == 'register'">
      <div class="form">
        <van-field
          clearable
          v-model="username"
          name="username"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '账号不能为空！' }]"
        />
        <van-field
          clearable
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空！' }]"
        />
        <van-field
          center
          clearable
          label="验证码"
          placeholder="输入验证码"
          v-model="verify"
        >
          <template #button>
            <VueImgVerify ref="verifyRef" />
          </template>
        </van-field>
      </div>
      <div style="margin: 16px 0;">
        <van-button round block :loading="loading" type="primary" native-type="submit">
          注册
        </van-button>
        <!-- 切换方法，在登录页面，点击传 login，通过 changType 进行赋值 -->
        <p @click="chanegType('login')" class="change-btn">登录已有账号</p>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue'
import VueImgVerify from '../components/VueImageVerify.vue'
import Header from '../components/Header.vue'
import axios from '../utils/axios'
import { Toast } from 'vant'
import router from '../router'
export default {
  name: 'Login',
  components: {
    VueImgVerify,
    Header
  },
  setup() {
    const verifyRef = ref(null)
    const state = reactive({
      username: '贾志恒',
      password: '123456',
      type: 'login', // 登录注册模式切换参数
      verify: '', // 验证码输入框输入的内容
      imgCode: '', // 生成的验证图片内的文字
      loading: false
    })
    /**
      * 表单提交方法，分别调用登录和注册 API 地址。
      * try...catch 写法可以捕获到 /user/register 接口调用异常的情况，
      * 如果没成功，可以在 catch 中捕获错误，
      * 逻辑是将按钮 loading 变量变成 false。
      */
    // 提交登录 or 注册表单
    const onSubmit = async (values) => {
      try {
        if (state.type == 'login') {
          const { data } = await axios.post('/user/login', {
            username: state.username,
            password: state.password
          })
          localStorage.setItem('token', data.token)
          window.location.href = '/'
        } else {
          state.imgCode = verifyRef.value.imgCode || ''
          if (verifyRef.value.imgCode.toLowerCase() != state.verify.toLowerCase()) {
            console.log('verifyRef.value.imgCode', verifyRef.value.imgCode)
            Toast.fail('验证码错误')
            return
          }
          state.loading = true
          const { data } = await axios.post('/user/register', {
            username: state.username,
            password: state.password
          })
          Toast.success('注册成功')
          state.type = 'login'
          state.loading = false
        }
      } catch (error) {
        console.log(111)
        state.loading = false
      }
    }
    // 赋值，赋值完成之后模板能拿到响应式结果，隐藏登录表单，显示注册表单。
    // 切换登录和注册两种模式
    const chanegType = (type) => {
      state.type = type
    }

    return {
      ...toRefs(state),
      onSubmit,
      chanegType,
      verifyRef
    }
  }
}
</script>

<style lang='less' scoped>
  @import url('../config/custom.less');
  .auth {
    height: calc(~"(100% - 46px)");
    padding: 30px 20px 0 20px;
    background:@primary-bg;
    .logo {
      width: 150px;
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    .form-wrap {
      .form {
        border-radius: 10px;
        overflow: hidden;
        .van-cell:first-child {
          padding-top: 20px;
        }
        .van-cell:last-child {
          padding-bottom: 20px;
        }
      }
    }
    .change-btn {
      text-align: center;
      margin: 10px 0;
      color: @link-color;
      font-size: 14px;
    }
  }
  /deep/ .van-field__control::placeholder {
    color:#86909c;
  }
  /deep/ .van-field__error-message{
    color:#f56c6c;
  }
  /**
    * 样式分析
    * @import url('../config/custom.less'); 
    * 引入 Less 变量文件，custom.less 内有事先定义好的样式变量，
    * 可以在写样式的时候，以 color: @primary; 这样的形式引用它。
    * 需要给 .auth 一个高度，但是给 100% 的话，页面会撑开出现滚动条，
    * 但是这个页面又不至于会出现滚动条，这就会显得很奇怪。于是通过计算，
    * 公用头部组件的高度为 46，所以通过 calc() 方法，
    * 动态的计算出页面的高度是 100% - 46px，所以如上述代码所示。
    */
</style>