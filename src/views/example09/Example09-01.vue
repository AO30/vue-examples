<template>
  <div>
    <h1>Axios拦截器</h1>
    <p>当用户/密码：1001，13456。</p>
    <form>
      <label>用户名</label>
      <input type="text" v-model="number" />
      <br />
      <label>密码</label>
      <input type="password" v-model="password" />
      <br />
      <button @click="login" type="button">登录</button>
    </form>
  </div>
</template>
<script>
import { LOGIN } from "@/store/types.js";
export default {
  data: () => ({
    number: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });
    }
  }
};
</script>
