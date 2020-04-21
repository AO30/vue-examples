<template>
  <div><h1>Homeworks</h1>
  
  <ul>
      <li v-for="(h, index) in homeworks" :key="index">
          <router-link :to="`/homeworks/${h.id}`">{{ h.name }}</router-link>
      </li>
  </div>
</template>
<script>
import { LIST_HOMEWORKS } from "@/store/types.js";
export default {
  created() {
    this.$store.dispatcj(LIST_HOMEWORKS);
  },
  computed: {
      ...mapState(["homeworks"])
  }
};
</script>
