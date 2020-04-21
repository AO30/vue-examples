<template>
  <div>
    <h1>v-bind</h1>
    <p>
      <label>
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <button :disabled="disabled">提交</button>
    </p>
    <p
      @mouseover="actived"
      @mouseleave="deActived"
      :class="{ 'bg-red': active }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae
      facere doloribus ea, enim aliquid illo, dolores similique velit asperiores
      cupiditate doloremque ipsa fuga quos! Aliquam eaque perspiciatis delectus
      suscipit!
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    disabled: true,
    active: false
  }),
  methods: {
    setAgree() {
      this.disabled = !this.disabled;
    },
    actived() {
      this.active = true;
    },
    deActived() {
      this.active = false;
    }
  }
};
</script>
<style scoped>
.bg-red {
  background-color: red;
}
</style>
