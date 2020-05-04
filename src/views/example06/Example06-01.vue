<template>
  <div>
    <h1>State绑定</h1>
    <p>
      通过根组件store对象绑定
      <br />
      {{ getUser.name }} / {{ getUser.address }}
    </p>
    <hr />
    <p>
      通过mapState绑定
      <br />
      {{ user.name }}
    </p>
    <p>
      通过自定义组件内计算属性，引用state属性
      {{ user1.address }}
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    ...mapState(["user"]),
    ...mapState({ user1: state => state.user })
  }
};
</script>
