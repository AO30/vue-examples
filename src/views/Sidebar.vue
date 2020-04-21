<template>
  <div>
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">Helloworld</router-link></li>
      <li><router-link to="/example02">数据驱动&计算属性</router-link></li>
      <li>
        路由传参
        <ul>
          <li>
            <router-link to="/example03/students/12/homeworks/1">
              sid:12; hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/74/homeworks/2">
              sid:74; hid:2
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        基本指令
        <ul>
          <li>
            <router-link to="/example04-01">v-text v-if v-show</router-link>
          </li>
          <li>
            <router-link to="/example04-02">v-bind</router-link>
          </li>
          <li>
            <router-link to="/example04-03">v-for</router-link>
          </li>
        </ul>
      </li>
      <li>
        双向绑定
        <ul>
          <li>
            <router-link to="/example05-01">v-module双向绑定</router-link>
          </li>
          <li>
            <router-link to="/example05-02">例子</router-link>
          </li>
        </ul>
      </li>
      <li>
        Vuex
        <ul>
          <li><router-link to="/example06-01">基本绑定</router-link></li>
          <li><router-link to="/example06-02">同步更新</router-link></li>
          <li><router-link to="/example06-03">异步更新</router-link></li>
        </ul>
      </li>
      <li>
        axios & mock
        <ul>
          <li>
            <router-link to="/example07-01">基本请求及mock数据</router-link>
          </li>
          <li><router-link to="/homeworks">homeworks</router-link></li>
          <li><router-link to="/example06-03">异步更新</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
ul {
  margin-top: 00px;
}
</style>
