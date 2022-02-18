<template>
  <div class="account">
    <Header title="账户安全" />
    <van-cell title="密码修改" @click="visible = true" is-link />
    <van-button class="logout" type="primary" size="large" @click="logout">退出登录</van-button>
    <van-dialog class="modal-pass" v-model:show="visible" @confirm="handleOk" title="修改密码" show-cancel-button>
      <van-cell-group>
        <van-field
          v-model="oldPass"
          label="原密码"
          clearable
          placeholder="请输入原密码"
        />
        <van-field
          v-model="newPass"
          label="新密码"
          clearable
          placeholder="请输入新密码"
        />
        <van-field
          v-model="newPass2"
          label="确认密码"
          clearable
          placeholder="再次输入确认"
        />
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import Header from '../components/Header.vue'
import axios from '../utils/axios'

export default {
  name: 'Account',
  components: {
    Header
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      visible: false,
      oldPass: '',
      newPass: '',
      newPass2: ''
    })

    // 修改密码
    const handleOk = async () => {
      if (state.newPass != state.newPass2) {
        Toast.fail('新密码不一致')
        return
      }
      /**
       * 修改密码接口 /user/modify_pass 接收三个参数：
       * old_pass：老密码。
       * new_pass：新密码。
       * new_pass2：新密码再次确认。
       */
      const { data } = axios.post('/user/modify_pass', {
        old_pass: state.oldPass,
        new_pass: state.newPass,
        new_pass2: state.newPass2
      })

      Toast.success('修改成功')
    }

    // 退出登录
    const logout = () => {
      localStorage.removeItem('token')
      router.push({ path: '/login' })
    }
    /**
     * 退出登录操作，
     * 直接通过 localStorage.removeItem('token') 把存在本地的 token 清空便可，
     * 下一次请求就不会带上 token 了。
     * 这里要注意，如果是设置 cookie 的话，
     * 需要服务端提供接口清理当前域下的 cookie 信息，
     * 这里采用的是 token 鉴权的方式，
     * 为了方便后续开发小程序和 App，归结于他们没有浏览器环境的 cookie 能力
     */
    return {
      ...toRefs(state),
      handleOk,
      logout
    }
  }
}
</script>

<style lang="less">
  @import url('../config/custom.less');
  .account {
    min-height: 100%;
    background-color: @background;
    
    .logout {
      display: block;
      margin: 0 auto;
      width: 90%;
      margin-top: 20px;
      background-color: @primary;
      border-color: @primary;
    }
    .modal-pass {
      .van-dialog__header {
        padding: 10px 0;
      }
      .van-dialog__content {
        .van-cell-group {
          padding: 20px;
        }
      }
    }
  }
</style>