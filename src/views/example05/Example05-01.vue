<template>
  <div>
    <h1>From Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <lable>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </lable>
      <br />
      <lable>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </lable>
      <br />
      <select v-modle="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`lab-${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch-${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <input type="file" @change="fileChange" />
    <br />
    <p v-if="file != null">{{ file.nmae }}/{{ file.size }}</p>
    <br />
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      sex: null,
      course: [],
      title: null
    },
    file: {},
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    submit() {
      console.log(this.user);
    },
    fileChange(event) {
      console.log(event.target.files[0]);
      //上传文件是二进制，不能使用json类型请求
      this.file = event.target.files[0];
    }
  }
};
</script>
