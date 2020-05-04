<template>
  <div>
    <h1>后端提供数据</h1>
    <p>
      基于sessionstorage中数据判断用户登陆状态，登录后加载此组件。
      <br />
    </p>
    <p v-if="teacher">
      {{ teacher.user.name }}
    </p>
    <p v-if="courses">
      课程
    </p>
    <ul>
      <li v-for="(c, index) in courses" :key="index">
        {{ c.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("backendindex");
  },
  computed: {
    ...mapState(["teacher", "courses"])
  }
};
</script>
