<template>
  <div>
    <h1>v-text</h1>
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="user.level == 'admin'">此内容仅admin可见</p>

    <template v-if="userNameLogin">
      <p>第1个input会被复用，输入的信息切换时会保存</p>
      <input placeholder="Enter your username" key="key1" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" key="key2" />
    </template>
    <br />
    <button v-on:click="changeInput">切换</button>
    <h1>v-show</h1>
    <p v-show="close">从内容仅close为true可见</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    admin: true,
    userNameLogin: true,
    user: { username: "AO", level: "admin" },
    close: true
  }),
  methods: {
    changeInput() {
      this.userNameLogin = !this.userNameLogin;
    }
  }
};
</script>
