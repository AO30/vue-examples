<template>
  <div>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label>
        <input type="checkbox" v-modle="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`l-${index}`">
          <input
            ref="checkboxs"
            type="checkbox"
            :key="`c-${index}`"
            v-model="selectedCourses"
            :value="{ id: c.id }"
            :disabled="!agreed"
            @change="check"
          />
          {{ c.name }}
        </label>
        <br :key="`b-${index}`" />
      </template>
      <br />
      <button
        type="button"
        :disabled="!agreed || !(selectedCourses.length >= amount)"
      >
        submit
      </button>
    </form>

    <p>{{ selectedCourses }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    courses: [
      { id: 4, name: "Java程序设计" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" },
      { id: 7, name: "移动终端开发技术" }
    ],
    amount: 2,
    selectedCourses: [{ id: 4 }],
    agreed: false
  }),
  methods: {
    check() {
      let checkboxDis = this.selectedCourses.length >= this.amount;
      this.$refs.checkboxDis
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    }
  }
};
</script>
