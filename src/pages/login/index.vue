<script setup>
import { reactive, ref } from 'vue';
import { reqRegister } from '@/api/user';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';

// console.clear();

const flag = ref(true);
const userStore = useUserStore();
const router = useRouter();

const handleClick = () => {
  flag.value = !flag.value;
};

// const email = ref("")
// const pwd = ref("")
const password2 = ref('');
const registerData = reactive({ name: '', email: '', telephone: '', password: '' });
const data = reactive({ email: '', password: '' });
const message = useMessage();
const handleLogin = async () => {
  // console.log(data)
  // reqLogin(data)
  // if (!data.value) {
  //       message.warning('请重新输入！')
  //       return
  // }
  // 登录失败情况
  const token = await userStore.login(data);
  if (token) {
    router.replace({ path: '/' });
  }
  userStore.setUserInfo();
};

const handleRegiter = async () => {
  // if (!registerData.value) {
  //       message.warning('请重新输入！')
  //       return
  // }
  // console.log(registerData+password2)
  // if (registerData.password !== password2 ){
  // 	alert("输入的两次密码不一致")
  // 	return
  // }
  // 账号同名错误
  const token = await userStore.register(registerData);
  if (token) {
    router.replace({ path: '/' });
  }
  userStore.setUserInfo();
};
const handlerenter = (key) => {
  if (key === 0) {
    handleRegiter();
  } else {
    handleLogin();
  }
};
</script>

<template>
  <div class="login-wrap">
    <div class="form-structor">
      <div class="signup" :class="{ 'slide-up': flag }">
        <h2 class="form-title" id="signup" @click="handleClick"><span>or</span>Sign up</h2>
        <div
          class="form-holder"
          @keyup.enter="
            () => {
              handlerenter(0);
            }
          "
        >
          <input type="text" class="input" placeholder="昵称" v-model="registerData.name" />
          <input type="email" class="input" placeholder="邮箱" v-model="registerData.email" />
          <input type="email" class="input" placeholder="手机号" v-model="registerData.telephone" />
          <input type="password" class="input" placeholder="密码" v-model="registerData.password" />
          <input type="password" class="input" placeholder="再次输入密码" v-model="password2" />
        </div>
        <button class="submit-btn" @click="handleRegiter">Sign up</button>
      </div>
      <div class="login" :class="{ 'slide-up': !flag }">
        <div class="center">
          <h2 class="form-title" id="login" @click="handleClick"><span>or</span>Log in</h2>
          <div
            class="form-holder"
            @keyup.enter="
              () => {
                handlerenter(1);
              }
            "
          >
            <input type="email" class="input" placeholder="Email" v-model="data.email" />
            <input type="password" class="input" placeholder="Password" v-model="data.password" />
          </div>
          <button
            class="submit-btn"
            @click="handleLogin"
            @keyup.enter="
              () => {
                handlerenter(0);
              }
            "
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css?family=Fira+Sans");

.login-wrap {
  // 	position: relative;
  // 	min-height: 100vh;
  // 	background-color: #E1E8EE;
  // 	display: flex;
  // 	align-items: center;
  // 	justify-content: center;
  // 	font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-image: url('@/assets/bg.jpeg');
}

.form-structor {
  background-color: #222;
  border-radius: 15px;
  height: 550px;
  width: 450px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 500px;
    background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100');
  }

  .signup {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    -webkit-transition: all 0.3s ease;

    &.slide-up {
      top: 5%;
      -webkit-transform: translate(-50%, 0%);
      -webkit-transition: all 0.3s ease;
    }

    &.slide-up .form-holder,
    &.slide-up .submit-btn {
      opacity: 0;
      visibility: hidden;
    }

    &.slide-up .form-title {
      font-size: 1em;
      cursor: pointer;
    }

    &.slide-up .form-title span {
      margin-right: 5px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;
    }

    .form-title {
      color: #fff;
      font-size: 1.7em;
      text-align: center;

      span {
        color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
      }
    }

    .form-holder {
      border-radius: 15px;
      background-color: #fff;
      overflow: hidden;
      margin-top: 50px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;

      .input {
        border: 0;
        outline: none;
        box-shadow: none;
        display: block;
        height: 30px;
        line-height: 30px;
        padding: 8px 15px;
        border-bottom: 1px solid #eee;
        width: 100%;
        font-size: 12px;

        &:last-child {
          border-bottom: 0;
        }
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    .submit-btn {
      background-color: rgba(0, 0, 0, 0.4);
      color: rgba(256, 256, 256, 0.7);
      border: 0;
      border-radius: 15px;
      display: block;
      margin: 15px auto;
      padding: 15px 45px;
      width: 100%;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;

      &:hover {
        transition: all 0.3s ease;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  .login {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 5;
    -webkit-transition: all 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: -20px;
      -webkit-transform: translate(-50%, 0);
      background-color: #fff;
      width: 200%;
      height: 250px;
      border-radius: 50%;
      z-index: 4;
      -webkit-transition: all 0.3s ease;
    }

    .center {
      position: absolute;
      top: calc(50% - 10%);
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;

      .form-title {
        color: #000;
        font-size: 1.7em;
        text-align: center;

        span {
          color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: #fff;
        border: 1px solid #eee;
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 30px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: #6b92a4;
        color: rgba(256, 256, 256, 0.7);
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        -webkit-transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }

    &.slide-up {
      top: 90%;
      -webkit-transition: all 0.3s ease;
    }

    &.slide-up .center {
      top: 10%;
      -webkit-transform: translate(-50%, 0%);
      -webkit-transition: all 0.3s ease;
    }

    &.slide-up .form-holder,
    &.slide-up .submit-btn {
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.3s ease;
    }

    &.slide-up .form-title {
      font-size: 1em;
      margin: 0;
      padding: 0;
      cursor: pointer;
      -webkit-transition: all 0.3s ease;
    }

    &.slide-up .form-title span {
      margin-right: 5px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;
    }
  }
}
</style>
