<template>
  <div><button @click="del">delete</button></div>
</template>
<script>
export default {
  props: ["homework"],
  methods: {
    del() {
      let r = confirm(`你确定删除${this.homework.name}作业吗？`);
      if (r) {
        alert(`${this.homework.name}作业已删除`);
      }
    }
  }
};
</script>
