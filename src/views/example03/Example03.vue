<template>
  <div>
    <p>在router启用props支持。在vue props属性中声明同名变量</p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    也可通过$route.params调用
    <br />
    {{ $route.params.sid }}
    <hr />
    {{ getTitle }}
  </div>
</template>
<script>
export default {
  props: ["sid", "hid"],
  data: () => ({
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springMVC" },
      { id: 3, title: "JPA" }
    ]
  }),
  created() {
    console.log("created()");
  },
  //beforeUpdate() {
  //  console.log("beforeUpdate()");
  // },
  // beforeRouteUpdate(to, from, next) {
  //  console.log("beforeRouteUpdate()");
  //  next();
  // },
  computed: {
    getTitle() {
      return this.homeworks.find(h => h.id == this.hid).title;
    }
  }
};
</script>
