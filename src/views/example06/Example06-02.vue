<template>
  <div>
    <h1>Mutation</h1>
    {{ user.name }} / {{ user.addres }}
    <p>
      <input type="text" v-modle="myUser.name" />
      <br />
      <input type="text" v-modle="myUser.address" />
      <br />
      <button type="button" @click="change">change</button>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { UPDATE_USER } from "@/store/types.js";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      this.$store.commit(UPDATE_USER, {
        name: this.myUser.name,
        address: this.myUser.address
      });
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
