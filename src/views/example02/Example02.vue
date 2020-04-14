<template>
  <div>
    <h1>Computed</h1>
    <p>基本绑定，缺少null判断等</p>
    <p>
      对于所有的数据绑定，Vue.js都提供了完全的JavaScript表达式支持，表达式会作为JavaScript解析
    </p>
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    {{ reversMessage }}
    <hr />
    {{ user.name }}
    <br />
    <button @click="change">change</button>
    <br />
    {{ user.insertTime }}
    <br />
    {{ myDate }}
    <br />
    <p>
      data中属性必须提前声明。data中的响应式属性数据，在组件创建时确定，数据可更改，但不能添加新属性
      。user.address属性，必须提前声明
    </p>
    <button @click="addAddress">change</button>
    <br />
    {{ user.address }}
    <hr />
    <p>
      计算属性，默认声明的是属性的getter方法，不支持传参。但JS中，属性可以是一个，函数
    </p>
    {{ myReplace(user.insertTime) }}
  </div>
</template>
<script>
export default {
  data: () => ({
    isShow: false,
    message: "hello",
    user: {
      name: "AO",
      insertTime: "2020.04.13T08:30:21",
      address: null
    }
  }),
  methods: {
    change() {
      this.user.name = "SUN";
    },
    addAddress() {
      this.user.address = "956";
    }
  },

  computed: {
    myDate() {
      return this.user.insertTime.replace("T", " ");
    },
    reversMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myReplace() {
      return date => date.replace("T", "");
    }
  }
};
</script>
