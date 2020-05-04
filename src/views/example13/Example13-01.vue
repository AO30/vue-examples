<template>
  <div>
    <h1>
      读取Excel表格数据
    </h1>
    <p>只能读取指定格式模板excel表格中的数据。即，必须约定好表格格式</p>

    <br />
    <form>
      <input type="file" @change="readFile" />
    </form>
    <br />
    <table>
      <tr>
        <td>#</td>
        <td>学号</td>
        <td>姓名</td>
        <td>成绩</td>
      </tr>
      <tr v-for="(s, index) in students" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ s.number }}</td>
        <td>{{ s.name }}</td>
        <td>{{ s.score }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { readStudentFile } from "@/util/ExcelUtils.js";
export default {
  data: () => ({
    students: null
  }),
  methods: {
    readFile(event) {
      let file = event.target.files[0];
      readStudentFile(file).then(data => {
        this.students = data;
      });
    }
  }
};
</script>
